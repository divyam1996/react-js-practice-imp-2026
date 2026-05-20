import React from "react";
import { useFormContext } from "../context/FormContext";

export default function UserMenu({  }) {
    const { formData } = useFormContext();
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ccc",
        width: "300px",
      }}
    >
      <h2>User Menu</h2>

      <p>
        <strong>Email:</strong> {formData.email}
      </p>

      <p>
        <strong>Age:</strong> {formData.age}
      </p>

      <p>
        <strong>Subscribed:</strong>{" "}
        {formData.subscribe ? "Yes" : "No"}
      </p>
    </div>
  );
}