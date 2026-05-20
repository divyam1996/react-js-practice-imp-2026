import React, { useMemo, useState } from "react";

function highlight(data, query) {
  if (!query) return data;
  const parts = String(data).split(new RegExp(`(${query})`, "gi"));

  return parts.map((p, index) =>
    p.toLowerCase() == query.toLowerCase() ? (
      <mark key={index} style={{ background: "yellow" }}>
        {p}
      </mark>
    ) : (
      p
    )
  );
}

function DataTable({ columns, data, pageSize = 10 }) {
  const [sortKey, setSortkey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  function handleSort(key) {
    if (key !== sortKey) {
      setSortkey(key);
      setSortDir("asc");
    } else if (sortDir == "asc") {
      setSortDir("desc");
    } else {
      setSortDir("asc");
      setSortkey(null);
    }
    setPage(1);
  }

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    return data.filter((row) =>
      columns.some((col) => String(row[col.key]).includes(query.toLowerCase()))
    );
  }, [query, data, columns]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const va = a[sortKey] ?? "";
      const vb = b[sortKey] ?? "";
      console.log(va, vb);
      const cmp =
        typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
      return sortDir == "asc" ? cmp : -cmp;
    });
  }, [sortDir, sortKey, filtered]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={col.key} onClick={() => handleSort(col.key)}>
                {col.label}
                {sortKey === col.key ? (sortDir === "asc" ? " ▲" : " ▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((item, index) => (
            <tr>
              {columns.map((col, index) => (
                <td>{highlight(item[col.key] ?? "", query)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default DataTable;