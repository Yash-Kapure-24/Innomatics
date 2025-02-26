import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput.jsx";
import ListTodo from "./components/ListTodo.jsx";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("listTodo");
    if (storedData) {
      setListTodo(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (listTodo.length > 0) {
      localStorage.setItem("listTodo", JSON.stringify(listTodo));
    }
  }, [listTodo]);

  const addList = (inputText) => {
    if (inputText.trim() === "") return;
    const updatedList = [...listTodo, { text: inputText, completed: false }];
    setListTodo(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...listTodo];
    updatedList[index].completed = !updatedList[index].completed;
    setListTodo(updatedList);
  };

  const deleteListItem = (index) => {
    const updatedList = listTodo.filter((_, i) => i !== index);
    setListTodo(updatedList);
  };

  const editListItem = (index, newText) => {
    if (newText.trim() === "") return;
    const updatedList = [...listTodo];
    updatedList[index].text = newText;
    setListTodo(updatedList);
  };

  return (
    <div className="main_container">
      <div className="center_container">
        <TodoInput addList={addList} />

        <h1 className="app-heading">To-Do List</h1>
        <hr />

        {listTodo.length > 0 ? (
          <ul className="todo-list-container">
            {listTodo.map((item, index) => (
              <ListTodo
                key={index}
                index={index}
                item={item}
                toggleComplete={toggleComplete}
                editListItem={editListItem}
                deleteListItem={deleteListItem}
              />
            ))}
          </ul>
        ) : (
          <p>Your To-Do list is empty. Add some tasks!</p>
        )}
      </div>
    </div>
  );
};

export default App;
