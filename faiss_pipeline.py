from typing import Optional, Tuple, List
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS, VectorStore
from langchain.schema import Document as LangchainDocument
from langchain_community.llms import HuggingFaceHub
from langchain_core.language_models.llms import LLM
from sentence_transformers import CrossEncoder
from langchain_community.vectorstores.utils import DistanceStrategy
from typing import Optional, Tuple, List
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.schema import Document as LangchainDocument
from langchain_community.llms import HuggingFaceHub
from langchain_core.language_models.llms import LLM
from sentence_transformers import CrossEncoder
from langchain.vectorstores import FAISS
import re

def load_embedder(model_name: str = "thenlper/gte-small", device: str = 'cpu') -> HuggingFaceEmbeddings:
    """Load the HuggingFace Embeddings model."""
    model_kwargs = {"device": device}
    encode_kwargs = {'normalize_embeddings': True}
    return HuggingFaceEmbeddings(
        model_name=model_name,
        model_kwargs=model_kwargs,
        encode_kwargs=encode_kwargs
    )

def load_llm(repo_id: str, hf_api_token: str) -> LLM:
    """Load the HuggingFace Hub model as an LLM."""
    return HuggingFaceHub(
        repo_id=repo_id,
        task="text-generation",
        huggingfacehub_api_token=hf_api_token,
        model_kwargs={
            "max_new_tokens": 512,
            "top_k": 30,
            "temperature": 0.1,
            "repetition_penalty": 1.03,
        },
    )

def load_database(persist_directory: str, embedder: HuggingFaceEmbeddings) -> FAISS:
    """Load the FAISS database with the specified embedder."""
    return FAISS.load_local(
        folder_path=persist_directory, 
        embeddings=embedder, 
        distance_strategy=DistanceStrategy.COSINE, 
        allow_dangerous_deserialization=True
    )

RAG_PROMPT_TEMPLATE = """
You are an experienced leader responding to a question. 
Use the information contained in the provided context to provide a precise, accurate, and authoritative response, similar to how a President would. 
Respond only to the question asked.
where ever you are to generate any word like obama, make it sound personal like you the one saying the given context text. 
Keep your response very relevant, and precise to document retrieved and avoid any hallucinations. 
Always refer to the provided context, and if the answer cannot be found from context kindly state it, state that clearly.
When asked anything about Obama personalize the response by answer with "I"... as you are acting as the president giving information, or interviewed.
</s>

Context:
{context}
---
Now here is the question you need to answer.

Question: {question}
</s>
"""

# Function to answer with RAG and integrate CrossEncoder reranker
def answer_with_rag(
    question: str,
    llm: LLM,
    knowledge_index: VectorStore,
    reranker_model: Optional[str] = "cross-encoder/ms-marco-TinyBERT-L-2-v2",
    reranker_device: str = "cpu",
    num_retrieved_docs: int = 7,
    num_docs_final: int = 3,
) -> Tuple[str, List[LangchainDocument]]:
    """Answer a question using RAG with the given knowledge index."""
    
    # Step 1: Gather documents with retriever
    retrieved_docs = knowledge_index.similarity_search(query=question, k=num_retrieved_docs)
    # retrieved_docs.reverse()

    titles= [doc.metadata.get('title', 'No Title Available') for doc in retrieved_docs[:2]]
    source= [doc.metadata.get('source', 'No Title Available') for doc in retrieved_docs[:2]]
    # Step 2: Rerank documents using CrossEncoder
    cross_encoder = CrossEncoder(reranker_model, max_length=512, device=reranker_device)
    
    reranked_docs = cross_encoder.rank(
        question,
        [doc.page_content for doc in retrieved_docs],
        top_k=num_docs_final,
        return_documents=True,
    )

    context = "".join(f"{doc['corpus_id']}:::{doc['text']}\n\n" for doc in reranked_docs)
    final_prompt = RAG_PROMPT_TEMPLATE.format(question=question, context=context)
    answer = llm(final_prompt)
    final_answer = f"Answer: {answer.strip()}\n\nSource(s): {', '.join([f'Title {titles}, Source: {source}' ])}"
    split_result = re.split(r'\n</s>\n(?:Answer|Response):\n?', final_answer)

    if len(split_result) > 1:
        final_answer = split_result[1].strip()
    else:
        final_answer = "No valid answer or response found."

# Reformat the final answer
    final_answer = f"Answer: {final_answer}"
    # Step 6: Extract only the relevant answer text
    # final_answer= f"Answer: {answer.strip()}\n\nSource(s): {', '.join([f'Document {i}' for i in range(len(retrieved_docs))])}"
    # final_answer= final_answer.split("\n</s>\nAnswer:")
    # final_answer = final_answer[1]
    # final_answer = f"Answer: {final_answer}"

    # Step 7: Update relevant documents metadata if necessary (optional)
    #relevant_docs = [LangchainDocument(page_content=doc["text"], metadata=doc) for doc in reranked_docs]

    return final_answer
