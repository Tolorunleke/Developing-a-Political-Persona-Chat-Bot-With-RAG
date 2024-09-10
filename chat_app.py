import streamlit as st
# from rag_pipeline_trial1 import load_embedder, load_llm, load_database, answer_with_rag

from faiss_pipeline import load_embedder, load_llm, load_database, answer_with_rag
from sentence_transformers import CrossEncoder
from langchain_community.vectorstores.utils import DistanceStrategy
cross_encoder = CrossEncoder(
    "cross-encoder/ms-marco-TinyBERT-L-2-v2", max_length = 512, device="cpu"
)
READER_LLM = load_llm(repo_id='mistralai/Mistral-7B-Instruct-v0.1', hf_api_token="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")
hf_embedder = load_embedder()
knowledge_index = load_database(persist_directory="dissertation_FAISS_DataBase1", embedder=hf_embedder)

def main():
    st.title("Ask Obama:")

    # Set up a session state variable to hold all messages
    if 'messages' not in st.session_state:
        st.session_state.messages = []

    # Display message history
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    prompt = st.chat_input('Kindly ask your questions here')

    if prompt:
        st.session_state.messages.append({"role": "user", "content": prompt})
        
        with st.chat_message("user"):
            st.markdown(prompt)
        answer = answer_with_rag(question=prompt, llm=READER_LLM, knowledge_index=knowledge_index)
        
        # Add AI response to chat history
        st.session_state.messages.append({"role": "assistant", "content": answer})
        
        with st.chat_message("assistant"):
            st.markdown(answer)

    # Optional: Add a button to clear chat history
    if st.button('Clear Chat History'):
        st.session_state.messages = []
        st.experimental_rerun()

if __name__ == "__main__":
    main()
