export const fetchSuggestions = (query) => {
  const data = ["apple", "banana", "grape", "orange", "mango", "pineapple"];

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(result);
    }, 300);
  });
};