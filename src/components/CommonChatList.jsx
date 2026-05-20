import React, { useState } from "react";

export default function ChatList() {
  const [messages, setMessages] = useState([]);
  const [user1Text, setUser1Text] = useState("");
  const [user2Text, setUser2Text] = useState("");

  // Add message to common list
  const addMessage = (user, text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        user,
        text,
      },
    ]);
  };

  // Handle Enter key
  const handleKeyDown = (e, user, text, clearInput) => {
    if (e.key === "Enter") {
      addMessage(user, text);
      clearInput("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Common Chat List</h2>

      {/* User 1 Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="User 1 typing..."
          value={user1Text}
          onChange={(e) => setUser1Text(e.target.value)}
          onKeyDown={(e) =>
            handleKeyDown(e, "User 1", user1Text, setUser1Text)
          }
        />
      </div>

      {/* User 2 Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="User 2 typing..."
          value={user2Text}
          onChange={(e) => setUser2Text(e.target.value)}
          onKeyDown={(e) =>
            handleKeyDown(e, "User 2", user2Text, setUser2Text)
          }
        />
      </div>

      {/* Common Messages List */}
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.user}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}