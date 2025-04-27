# AI-Chat-with-PDF-App
# AI PDF Chat Agent

An **AI-powered agent** built with **Next.js** that allows users to upload and chat with PDF documents.  
The project leverages **LangChain**, **OpenAI**, **Qdrant**, and other powerful libraries to create an interactive and intelligent experience.

## Tech Stack

- **Next.js** – Frontend and API routes
- **LangChain Community & Core**
- **OpenAI** (Chat and Embedding APIs)
- **Qdrant** (Vector database for storing document embeddings)
- **pdf-parse** – PDF text extraction
- **Express.js** – File handling and middleware
- **BullMQ** – Background job queue
- **Multer** – File uploads
- **dotenv** – Environment variable management
- **CORS** – Cross-Origin Resource Sharing

## Features

- Upload PDF files
- Parse and extract text from PDFs
- Chunk documents into manageable sections
- Generate embeddings using OpenAI
- Store and retrieve embeddings using Qdrant
- Semantic search and context-aware conversations
- Real-time chat interface
- Background processing with BullMQ for scaling
- Environment configuration with dotenv

## Getting Started

### Prerequisites

- **Node.js** (version 16.14.0 or higher)
- **Qdrant** instance (locally or via cloud)
- **OpenAI API Key**

