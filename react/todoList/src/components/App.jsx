import React, { useState } from "react";

function App() {
  const [item, setItems] = useState("");
  const [addIt, setAddIt] = useState([]);

  function handleItem(e) {
    const nameI = e.target.value;

    setItems(nameI);
    //console.log(nameI);
  }
  function addItem() {
    setAddIt((prev) => {
      return [...prev, item];
    });
    setItems("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleItem} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addIt.map((itm) => (
            <li>{itm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
