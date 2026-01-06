"use client";

import { useRef } from "react";

export default function UploadButton() {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Upload Payment Screenshot
      </button>

      <input type="file" ref={fileRef} className="hidden" />
    </>
  );
}
