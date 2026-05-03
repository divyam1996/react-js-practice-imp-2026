import React, { useEffect, useState, useRef } from "react";

const usePaginatedfetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef(new Map());
  const controllerref = useRef(null);

  useEffect(() => {
    const { ttl } = options || {};
    if (cache.current.has(url)) {
      const { productData, time } = cache.current.get(url);
      if (Date.now() - time < ttl) {
        // doubt
        setData(productData);
        return;
      }
    }

    if (controllerref.current) {
      controllerref.current.abort();
    }

    const controller = new AbortController();
    controllerref.current = controller;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const result = await fetch(url, { signal: controller.signal });
        const data = await result.json();

        console.log(data, "111");

        cache.current.set(url, {
          productData: data?.products || [],
          time: Date.now(),
        });
        setData(data?.products);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      if (controllerref.current) {
        controllerref.current.abort();
      }
    };
  }, [url]);

  return { data, loading, error };
};

export default usePaginatedfetch;
