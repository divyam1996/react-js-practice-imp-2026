import React, { useEffect, useState } from "react";

const PaginationNumbers = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <h2>Posts</h2>

      {/* Data */}
      {currentData.map((item) => (
        <div key={item.id}>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </div>
      ))}

      {/* Pagination Numbers */}
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                margin: "5px",
                fontWeight: currentPage === page ? "bold" : "normal",
                background: currentPage === page ? "#ddd" : "white",
              }}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationNumbers;