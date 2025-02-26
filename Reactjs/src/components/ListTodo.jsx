import React, { useState, useEffect } from "react";
import "./ListTodo.css";

const ListTodo = ({ item, index, toggleComplete, editListItem, deleteListItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text || "");

  useEffect(() => {
    setEditedText(item.text);
  }, [item.text]);

  const handleEdit = () => {
    if (editedText.trim() === "") return;
    editListItem(index, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`list-item ${item.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleComplete(index)}>{item.text}</span>
      )}

      <span className="icons">
        {isEditing ? (
          <button onClick={handleEdit} className="save-btn">✔</button>
        ) : (
          <>
            <span onClick={() => setIsEditing(true)}>✏️</span>
            <span onClick={() => deleteListItem(index)}>🗑️</span>
          </>
        )}
      </span>
    </li>
  );
};

export default ListTodo;
