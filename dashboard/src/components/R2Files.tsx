import { useEffect, useState } from "react";

export default function R2Files() {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/r2/list")
      .then((r) => r.json())
      .then((data) => setFiles(data.files));
  }, []);

  return (
    <div>
      <h2>R2 Storage</h2>

      {files.length === 0 ? (
        <p>No files found</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.key}>
              {file.key} ({file.size} bytes)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
