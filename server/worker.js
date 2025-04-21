import { Worker } from "bullmq";
import 'dotenv/config';

import { QdrantVectorStore } from "@langchain/qdrant";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "langchain/text_splitter";

const worker = new Worker(
  "file-upload-queue",
  // async (job) => {
  //   console.log(`job :`, job.data);
  //   const data = JSON.parse(job.data);
  //   const loader = new PDFLoader(data.path);

  //   const docs = await loader.load();

  //   // const textSplitter = new CharacterTextSplitter({
  //   //     chunkSize: 300,
  //   //     chunkOverlap: 0,
  //   //   });
  //   //   const texts = await textSplitter.splitText(docs);
  //   //   console.log(texts);

  //   const embeddings = new OpenAIEmbeddings({
  //     model: 'text-embedding-3-small',
  //     apiKey: '',
  //   });

  //   const vectorStore = await QdrantVectorStore.fromExistingCollection(
  //     embeddings,
  //     {
  //       url: 'http://localhost:6333',
  //       collectionName: 'langchainjs-testing',
  //     }
  //   );
  //   await vectorStore.addDocuments(docs);
  //   console.log(`All docs are added to vector store`);
  // },


  async (job) => {
    try {
      const data = JSON.parse(job.data);
      const loader = new PDFLoader(data.path);
      const docs = await loader.load();
  
      const splitter = new CharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });
      const splitDocs = await splitter.splitDocuments(docs);
  
      const embeddings = new OpenAIEmbeddings({
        model: 'text-embedding-3-small',
        apiKey: process.env.OPENAI_API_KEY,
      });
  
      const vectorStore = await QdrantVectorStore.fromDocuments(
        splitDocs,
        embeddings,
        {
          url: 'http://localhost:6333',
          collectionName: 'langchainjs-testing',
        }
      );
  
      console.log(`All docs are added to vector store`);
    } catch (err) {
      console.error(`Job failed`, err);
    }
  },
  























  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: "6379",
    },
  }
);
