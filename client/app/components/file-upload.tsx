"use client";

import * as React from "react";
import { Upload } from "lucide-react";

const FileUploadComponent: React.FC = () => {
  const handleFileUploadBtnClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");

    el.addEventListener("change", async (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        if (input) {
          const formData = new formData();
          formData.append("pdf", input);

          await fetch("http://localhost:8000/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File Uploaded.");
        }
      }
    });

    el.click();
  };

  return (
    <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg">
      <div
        onClick={handleFileUploadBtnClick}
        className="flex justify-center items-center flex-col cursor-pointer"
      >
        <h3>Upload a PDF file.</h3>
        <Upload />
      </div>
    </div>
  );
};

export default FileUploadComponent;
