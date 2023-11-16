import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetData(url) {
  const [data, setData] = useState("");
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (refetch) {
      setError(false);
      setLoading(true);
      axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.message === "done") {
            setError(false);
            setData(res.data);
          } else {
            setError(Error(res.data.message));
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
      setRefetch(false);
    }
  }, [refetch]);
  return { data, loading, error, setRefetch };
}
