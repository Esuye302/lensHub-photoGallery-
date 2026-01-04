"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

const UploadPage = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  //handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);

      const response = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUploadedUrl(data.url);
      alert("Photo uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <main
      className=" p-8 mt-3"
      style={{
        //change the border style
        border: "4px dashed indigo",
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Upload Photo</h1>
      <form onSubmit={handleSubmit} className=" flex p-4 ">
        <input
          type="File"
          className="border border-amber-400 rounded-2xl"
          onChange={handleChange}
        />
        <input
          type="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          value={title}
          className="border mx-4  border-amber-400 rounded-2xl px-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          upload
        </button>
      </form>
      {uploadedUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Uploaded Photo:</h2> 
          <img src={uploadedUrl} alt={title} className="max-w-xs" />
        </div>
      )}
      
    </main>
  );
};

export default UploadPage;
