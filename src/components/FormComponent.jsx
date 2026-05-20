import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import UserMenu from "./UserMenu";

const formConfig = [
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
  },
  {
    name: "age",
    type: "number",
    label: "Age",
    required: false,
  },
  {
    name: "subscribe",
    type: "checkbox",
    label: "Subscribe",
    required: false,
  },
];

export default function FormComponent() {
//   const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    // setUserData(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Form</h1>

      <DynamicForm
        config={formConfig}
        onSubmit={handleFormSubmit}
      />

      {/* {userData && <UserMenu user={userData} />} */}
       <UserMenu />
    </div>
  );
}