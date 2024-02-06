import React from "react";
import { useState } from "react";
function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [qunatity, setQuantity] = useState(0);
  
    function handleSubmit(e) {
      if (!description) return;
  
      e.preventDefault();
      const newItem = { description, qunatity, packed: "false", id: Date.now() };
      // console.log(newItem);
  
      onAddItem(newItem);
  
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for trip? </h3>
        <select
          value={qunatity}
          onClick={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }
  export default Form;