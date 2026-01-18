"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const SECRET_KEY = "1212";

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === SECRET_KEY) {
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Select a file first");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    const res = await fetch("/api/photos", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(data.url);
  };

  if (!authorized) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white px-6">
        <form
          onSubmit={handlePasswordSubmit}
          className="w-full max-w-sm bg-neutral-900 p-8 rounded-3xl shadow-2xl border border-neutral-800"
        >
          <h1 className="text-2xl font-light mb-6 text-center tracking-wide">
            Studio Access
          </h1>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl px-4 py-3 mb-6 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-neutral-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
          >
            Enter
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-light mb-2 tracking-wide text-center">
          Studio Upload
        </h1>
        <p className="text-neutral-400 mb-10 text-center">
          Private workspace · Your images, your rules
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-neutral-950 p-6 rounded-3xl shadow-2xl border border-neutral-800"
        >
          <input
            type="file"
            onChange={handleChange}
            className="w-full text-sm file:mr-4 file:px-4 file:py-2
              file:rounded-lg file:border-0
              file:bg-neutral-800 file:text-white
              hover:file:bg-neutral-700"
          />

          <input
            type="text"
            placeholder="Photo title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl bg-transparent border-b
              border-neutral-700 py-3 focus:outline-none
              focus:border-indigo-500 placeholder-neutral-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
          >
            Upload to Gallery
          </button>
        </form>

        {uploadedUrl && (
          <div className="mt-12 text-center">
            <p className="text-neutral-400 mb-4">Preview</p>
            <img
              src={uploadedUrl}
              alt={title}
              className="rounded-2xl max-h-80 mx-auto object-contain shadow-lg border border-neutral-800"
            />
          </div>
        )}
      </div>
    </main>
  );
}
