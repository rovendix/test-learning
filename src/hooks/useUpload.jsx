import axios from "axios";
import { useEffect, useState } from "react";

export default function useUpload(file) {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (file) {
      async function getData() {
        console.log({
          fileName: file.name.split(".")[0],
          fileType: file.name.split(".").pop(),
        });
        const target = await axios
          .post(
            "https://e-learninggraduationproject.azurewebsites.net/upload",
            {
              fileName: file.name.split(".")[0],
              fileType: file.name.split(".").pop(),
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .catch((err) => {
            setError(err);
            return;
          });
        const ParsedFile = await convertFileToArrayBuffer(file);
        await axios
          .put(target.data.accountSasTokenUrl, ParsedFile, {
            headers: {
              "Content-Type": "application/octet-stream",
              "x-ms-blob-type": "BlockBlob",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percent = Math.floor((loaded * 100) / total);
              setProgress(percent);
            },
          })
          .catch((err) => {
            setError(err);
            return;
          });
        setUrl(target.data.fileUrl);
      }
      getData();
    }
  }, [file]);
  return { url, progress, error };
}

const convertStringToArrayBuffer = (str) => {
  const textEncoder = new TextEncoder();
  return textEncoder.encode(str).buffer;
};

export function convertFileToArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.name) {
      reject(new Error("Invalid or missing file."));
    }

    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result;

      if (arrayBuffer === null) {
        resolve(null);
        return;
      }
      if (typeof arrayBuffer === "string") {
        resolve(convertStringToArrayBuffer(arrayBuffer));
        return;
      }
      if (!arrayBuffer) {
        reject(new Error("Failed to read file into ArrayBuffer."));
        return;
      }

      resolve(arrayBuffer);
    };

    reader.onerror = () => {
      reject(new Error("Error reading file."));
    };

    reader.readAsArrayBuffer(file);
  });
}
