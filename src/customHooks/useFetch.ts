import { useEffect, useState } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    })();
  }, [url]);
  return { data, isLoading, error };
}
