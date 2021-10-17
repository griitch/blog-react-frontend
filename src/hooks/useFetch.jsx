import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data);
      });
  }, [url]);

  return { data, loading };
}
