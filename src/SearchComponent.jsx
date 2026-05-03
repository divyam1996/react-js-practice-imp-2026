import React, { useState } from "react";
import  useDebounce  from "./useDebounce";
import { useFetchData } from "./useFetchData";

export default function SearchComponent() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const url = debouncedQuery
    ? `https://jsonplaceholder.typicode.com/posts?title_like=${debouncedQuery}`
    : null;

  const { data, loading, error } = useFetchData(url);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Posts</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error.message}</p>}

      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}