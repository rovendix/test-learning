import axios from "axios";
import { useEffect, useState } from "react";

export default function useUpload(file) {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [abort, setAbort] = useState(null);
  useEffect(() => {
    if (file) {
      console.log(file);
      async function getData() {
        const fileType = file.name.match(/\.[^/.]+$/)[0].replace(".", "");
        const fileName = file.name.replace(/\.[^/.]+$/, "");
        setProgress(0);
        const target = await axios
          .post(
            "https://e-learnig-graduation-project.azurewebsites.net/upload",
            {
              fileName,
              fileType,
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

        const controller = new AbortController();
        setAbort(controller);
        await axios
          .put(target.data.accountSasTokenUrl, ParsedFile, {
            signal: controller.signal,
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
          .then((res) => {
            setUrl(target.data.fileUrl);
          })
          .catch((err) => {
            setError(err);
            return;
          });
      }
      getData();
    }
  }, [file]);
  return { url, progress, error, abort };
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
