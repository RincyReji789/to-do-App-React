import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const addTodo = () => {
    const timestamp = new Date().toLocaleString(); // Get the current timestamp
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false, timestamp }]);
    setToDo(''); // Clear the input field after adding a to-do
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
             
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  );
                }}
                value={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <p key={obj.id}>{obj.timestamp}</p>
            <div className="right">
              <i onClick={() => deleteToDo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
