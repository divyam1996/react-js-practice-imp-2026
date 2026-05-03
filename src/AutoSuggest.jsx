import React, { useState, useEffect, useRef } from "react";
import useDebounce from "./useDebounce";
import { fetchSuggestions } from "./api";
import "./styles.css";

export default function AutoSuggest() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  const debouncedInput = useDebounce(input, 300);
  const containerRef = useRef();

  // Fetch suggestions
  useEffect(() => {
    if (!debouncedInput) {
      setSuggestions([]);
      return;
    }

    fetchSuggestions(debouncedInput).then((res) => {
      setSuggestions(res);
      setShowDropdown(true);
    });
  }, [debouncedInput]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex(
        (prev) => (prev - 1 + suggestions.length) % suggestions.length
      );
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        setInput(suggestions[activeIndex]);
        setShowDropdown(false);
      }
    }
  };

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setActiveIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search fruits..."
        className="input"
      />

      {showDropdown && suggestions.length > 0 && (
        <ul className="dropdown">
          {suggestions.map((item, index) => (
            <li
              key={item}
              className={index === activeIndex ? "active" : ""}
              onClick={() => {
                setInput(item);
                setShowDropdown(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}