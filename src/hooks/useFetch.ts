import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const jsonData = await res.json();

        setIsPending(false);
        setData(jsonData);
        setError("");
      } catch (err: any) {
        console.log(err);
        if (err.name === "AbortError") {
          console.log("Fetch was aborted");
        } else {
          setError("Could not fetch the data");
          setIsPending(false);
          console.error(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
