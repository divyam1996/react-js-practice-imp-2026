// import { useCallback, useEffect, useRef, useState } from "react";

// const cache = new Map();

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// export function useFetchData(url, options = {}, retryCount = 2) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const controllerRef = useRef(null); 

//   const fetchData = useCallback(async () => {
//     if (!url) return;

//     // Cancel previous request
//     if (controllerRef.current) {
//       controllerRef.current.abort();
//     }

//     const controller = new AbortController();
//     controllerRef.current = controller;

//     // Cache check
//     if (cache.has(url)) {
//       setData(cache.get(url));
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     let attempt = 0;

//     while (attempt <= retryCount) {
//       try {
//         const res = await fetch(url, {
//           ...options,
//           signal: controller.signal, //  attach signal
//         });

//         if (!res.ok) {
//           if (res.status >= 500 && attempt < retryCount) {
//             attempt++;
//             await sleep(500 * Math.pow(2, attempt));
//             continue;
//           } else {
//             throw new Error("Request failed");
//           }
//         }

//         const result = await res.json();

//         cache.set(url, result);
//         setData(result);
//         setLoading(false);
//         return;
//       } catch (err) {
//         // 👇 Ignore abort errors
//         if (err.name === "AbortError") {
//           return;
//         }

//         if (attempt < retryCount) {
//           attempt++;
//           await sleep(500 * Math.pow(2, attempt));
//         } else {
//           setError(err);
//           setLoading(false);
//         }
//       }
//     }
//   }, [url, options, retryCount]);

//   useEffect(() => {
//     fetchData();

//     return () => {
//       // Cleanup on unmount
//       if (controllerRef.current) {
//         controllerRef.current.abort();
//       }
//     };
//   }, [fetchData]);

//   return { data, loading, error };
// }


// with react query
import { useQuery } from "@tanstack/react-query";

export function useFetchData(url, options = {}, retryCount = 2) {
  const query = useQuery({
    queryKey: [url, options],

    // ✅ everything inside (like your previous code)
    queryFn: async ({ signal }) => {
      const res = await fetch(url, {
        ...options,
        signal, // auto abort
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      return res.json();
    },

    enabled: !!url,

    // ✅ caching (replaces Map)
    staleTime: 1000 * 60 * 5,

    // ✅ retry with exponential backoff
    retry: retryCount,
    retryDelay: (attempt) => 500 * Math.pow(2, attempt),

    refetchOnWindowFocus: false,
  });

  // ✅ same API as your old hook
  return {
    data: query.data || null,
    loading: query.isLoading,
    error: query.error,
  };
}