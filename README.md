# Retrieval-Augmented Generation (RAG) Chatbot Development

This repository contains the code, scripts, and resources for the development of a Retrieval-Augmented Generation (RAG) chatbot. The project leverages a combination of retrieval-based and generative techniques to create a highly interactive and accurate chatbot designed to provide consistent and meaningful responses for various use cases, such as customer engagement, political conversations, and more.

## 📊 Project Overview

### 🔍 Chatbot Design and Development
- Developed a chatbot using a Retrieval-Augmented Generation (RAG) framework, leveraging advanced tools and libraries:
  - **HuggingFace Transformers**: For state-of-the-art language modeling and response generation.
  - **Langchain**: To handle dynamic conversation flows and context management.
  - **FAISS (Facebook AI Similarity Search)**: For efficient retrieval of relevant documents and responses from large datasets.
  - **Recursive Text Splitters**: Used for processing, setting chunk size to 700 and overlap to 110.
  - **thenlper/gte-small**: Employed as the embedding model, selected as suitable embeddings pre-trained model for the diverse dataset collections.

### 📉 Exploratory Analysis
Extensive exploratory analysis has been conducted and is documented in the notebook, with visualizations available. The analysis covers:
- **Data Distribution Analysis**: Examines the distribution of different content types (e.g., speeches vs. tweets) to understand their representation within the dataset.
- **Sentiment Analysis**: Assesses emotional tone variations across different types of content to identify patterns in sentiment.
- **Word Frequency Analysis**: Identifies the most commonly used terms and key themes to provide insight into the focus areas of the data.
- **Source Evaluation and Bias Identification**:
  - Recognizes potential biases (temporal, contextual, selection) that may affect the quality and interpretation of the dataset.
  - Evaluates the credibility of data sources, emphasizing reputable records and media outlets to ensure data reliability.

### 🧩 Data Embedding and Storage
- **Embedding Techniques**: Textual data was chunked and converted into numerical embeddings to enhance semantic understanding and retrieval efficiency. The following pre-trained embedding models were employed:
  - **OpenAI Embedding Model**: A high-accuracy, paid model known for capturing semantic nuances.
  - **BAAI/bge-base-en-v1.5**: excels in preserving contextual integrity suitable for minimal resource use.
  - **thenlper/gte-small**: A lightweight, efficient model, excels in helping vector stroe retrieve relevant chunks, ideal for semantic search and content generation.
- The diversity of embedding models ensured adaptability across different query types, providing high-quality embeddings for subsequent use.

### 🗄️ Storing Vectors
- **Chroma**: Initially chosen for its scalability and speed in saving and loading vector stores. However, it faced limitations with large datasets, particularly when using embeddings other than OpenAI, causing inefficiencies and delays due to the requirement of many more manipulations to achieve set goals.
- **FAISS (Facebook AI Similarity Search)**: Selected for its robust handling of high-dimensional similarity searches, offering quick indexing and retrieval. FAISS was preferred after extensive testing, demonstrating superior performance with the "thenlper/gte-small" embedding model, which provided the best relevance score.
- **Optimization Trials**: Multiple tests were conducted to match embedding models with the most compatible vector stores, ultimately favoring FAISS and the "thenlper/gte-small" model for optimal similarity relevance scores, while OpenAI embeddings excelled in precision.
- **Vector Database Evaluation**:
  - **Similarity Score**: Assessed how closely the retrieved documents matched input queries. The **BAAI/bge-base-en-v1.5** model had the highest precision, making it suitable for high-accuracy retrieval scenarios.
  - **Relevance Score**: Measured contextual appropriateness of the retrieved information. The **all-MiniLM-L6-v2** model showed better performance than OpenAI’s embeddings, providing contextually relevant retrievals.


### 🧠 Modularized Pipeline and Brain Components
The RAG chatbot leverages a modularized pipeline that integrates multiple components:
- **Pretrained Models**: Utilizes various pretrained language models from HuggingFace to generate accurate and contextually relevant responses.
- **Large Language Models (LLMs)**: Mixtral, from Hugging Face, is used as the large language model to serve as the regenerator, enhancing comprehension and generation capabilities for nuanced and context-aware outputs.
- **Prompt Engineering**: Designed prompts to guide the model in generating targeted responses based on specific user inputs.
- **RAG Architecture**: Combines retrieval and generation steps seamlessly to maintain a balance between accuracy and fluency in responses.

### 🛠️ Functional Implementations
- **chat_app2.py**: Implements the core chatbot application using Streamlit, allowing users to interact with the chatbot through a web-based interface.
- **faiss_pipeline.py**: Contains the full RAG pipeline, including functions for data retrieval, embedding, and ranking. Defines methods for searching and ranking documents from the vector database using FAISS.
- **load_create_vectostore_EDA&Evaluation.ipynb**: Jupyter notebook with detailed steps on:

  - **Data Loading and Preprocessing**: Preparation and cleaning of textual data for efficient retrieval.
  - **Vector Store Creation**: Embedding data and saving it to a FAISS vector store to facilitate fast and accurate search.
  - **Exploratory Data Analysis (EDA)**: Visualizations to understand data characteristics and inform model development.
  - **Evaluation**: Assessment of vector store and RAG model performance, including recall, precision, and F1 score metrics.
  - **Additional Visualizations**: Illustrations created during the evaluation phase that are not included in the main documentation.
  - **Ground Truth, Synthetic, and Curated Answers**: Collection and comparison of real and generated responses.

### 🎯 Model Evaluation and key Results 
- The chatbot was evaluated for its ability to provide accurate and relevant responses:
  - **BERT Mean Recall Score**: 0.89
  - **BERT Precision**: 0.88
  - **BERT F1 Score**: 0.89 (Good Harmonic Indication)
- These metrics demonstrate the chatbot’s effectiveness in maintaining relevance and accuracy, making it a viable solution for enhancing user engagement and reducing operational costs.

### 📂 Tools and Technologies Used
- **Python**: Primary programming language for all scripts and model development.
- **Streamlit**: For deploying the chatbot as an interactive web application.
- **FAISS**: Used for efficient similarity search and document retrieval.
- **HuggingFace Transformers**: For NLP model training and response generation.
- **Langchain**: To handle conversation context and flow management.
- **Chroma**: Enhances data embedding and processing capabilities.

## 🚀 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Tolorunleke/RAG-Chatbot-Development.git

2. **Install Required Libraries: Install the necessary libraries by running**:
    ```bash
    pip install streamlit langchain langchain-community faiss pytube youtube-transcript-api nltk wordcloud bert_score rouge

3. **Set Up the Application**:
    Run the chat_app2.py script using Streamlit to launch the chatbot interface.
    Execute the faiss_pipeline.py script to set up the RAG pipeline for document retrieval and ranking.

4.  **Review the Code and Notebooks**:
    Review the load_create_vectostore_EDA&Evaluation.ipynb notebook for details on data preprocessing, vector store creation, and model evaluation.

## 📂 Files Included

- **chat_app2.py**: Main script for running the chatbot application.
- **faiss_pipeline.py**: Contains the RAG pipeline for data retrieval and ranking.
- **load_create_vectostore_EDA&Evaluation.ipynb**: Notebook detailing data loading, preprocessing, vector store creation, EDA, and performance evaluation.
- **dataset/**: Folder containing all datasets utilized, including raw data and API-sourced data.

## 📈 Future Enhancements
- **Expand Model Coverage**: Incorporate additional data sources to improve response diversity and relevance.
- **Integrate Real-Time Analytic**s: Develop dashboards to provide insights into chatbot performance and user interaction patterns.
- **Optimize Performance**: Continuously monitor and refine the RAG pipeline to handle increased data volumes and user queries efficiently.

## 💡 Key Insights
- **Enhanced User Engagement**: The chatbot provides consistent, accurate responses around the clock, improving customer interaction and engagement.
- **Reduced Operational Costs**: Automation of response generation helps in minimizing human intervention, leading to cost savings.
- **Flexible and Scalable**: The integration of various tools allows for easy adaptation and scaling to different contexts and user bases.
