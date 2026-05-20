import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

export default function DynamicForm({ config, onSubmit }) {
   const { setFormData } = useFormContext();
  const initialState = config.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  const [localFormData, setLocalFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const value =
      field.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    setLocalFormData((prev) => ({
      ...prev,
      [field.name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [field.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    config.forEach((field) => {
      if (
        field.required &&
        !localFormData[field.name]
      ) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(localFormData);
    setFormData(localFormData);

    // Optional reset
    // setLocalFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field) => (
        <div
          key={field.name}
          style={{ marginBottom: "15px" }}
        >
          {field.type !== "checkbox" && (
            <label>
              {field.label}
            </label>
          )}

          <br />

          {field.type === "checkbox" ? (
            <label>
              <input
                type="checkbox"
                checked={localFormData[field.name]}
                onChange={(e) =>
                  handleChange(e, field)
                }
              />
              {field.label}
            </label>
          ) : (
            <input
              type={field.type}
              value={localFormData[field.name]}
              onChange={(e) =>
                handleChange(e, field)
              }
              style={{
                padding: "8px",
                width: "250px",
              }}
            />
          )}

          {errors[field.name] && (
            <p style={{ color: "red", margin: 0 }}>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <button type="submit">
        Submit
      </button>
    </form>
  );
}