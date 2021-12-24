import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = async (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const source = axios.CancelToken.source();

    try {
      const { data } = await axios.get(url, { cancelToken: source.token() });
      setLoading(false);
      setData(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }

    return () => source.cancel();
  }, [url]);

  return { data, loading, error };
};
