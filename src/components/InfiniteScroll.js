import React, { useEffect, useState, useRef, useCallback } from "react";
import usePaginatedfetch from "../hooks/usePaginatedFetch";


let LIMIT = 10;
const InfiniteScroll = () => {
  const [skip, setSkip] = useState(0);
  const [item, setItem] = useState([]);
  const [hasmore, sethasMore] = useState(true);
  const observer = useRef();

  const { data, loading, error } = usePaginatedfetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
    { ttl: 60000 }
  );

  useEffect(() => {
    if (!data.length) return;

    setItem((prev) => [...prev, ...data]);

    if (data.length < LIMIT) {
      sethasMore(false);
    }
  }, [data]);

  const lastref = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasmore && !loading) {
            setSkip((prev) => prev + LIMIT);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      if (observer.current) {
        observer.current.observe(node);
      }

      return () => {
        observer.current.unobserve(node);
      };
    },
    [hasmore]
  );

  console.log(data, "cdffrfr");

  return (
    <div>
      {item?.map((product, index) => {
        let isLast = index == item.length - 1;
        return <div ref={isLast ? lastref : null}>{product.title}</div>;
      })}

      {loading && <div>Loading....</div>}

      {error && <div>Error</div>}
    </div>
  );
};

export default InfiniteScroll;
