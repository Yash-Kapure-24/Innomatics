import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ addList }) => {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    addList(inputText);
    setInputText(""); 
  };

  return (
   <>
    <div className="input_container">
      <input
        type="text"
        className="input-box-todo"
        value={inputText}
        placeholder="Enter your task"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="add-btn" onClick={handleAdd}>
        +
      </button>
    </div></>
  );
};

export default TodoInput;