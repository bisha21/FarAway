import React from "react";
import { useState } from "react";

function PackingList({ items, deleteItem, onToggle,DeleteAllItem }) {
    let sortItem;
  const [sortBy, setSortBy] = useState("description");
  
  if (sortBy === "input") {
    sortItem = items;
  }
  
  if (sortBy === "description") {
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description, undefined, { sensitivity: 'base' }));
  }
  
  if (sortBy === "packed") {
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  
  
    return (
      <div className="list">
        <ul>
          {sortItem.map((item) => (
            <Item
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              onToggle={onToggle}
            />
          ))}
        </ul>
  
        <select
          value={sortBy}
          className="actions"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={DeleteAllItem} >Clear list</button>
      </div>
    );
  }
  
  function Item({ item, deleteItem, onToggle }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggle(item.id)}
        />
  
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </li>
    );
  }
  export default PackingList;