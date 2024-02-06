import React, { useState } from "react";
import "./index.css";
import Logo from "./logo";
import Stats from  "./footer";
import Form from "./form";
import PackingList from "./paclingList";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed:false  },
  { id: 2, description: "Water", quantity: 12, packed: false },
  { id: 3, description: "Local Currency", quantity: 1, packed: true },
];
export default function App() {
  const [item, setItem] = useState(initialItems);
  function handleItem(item) {
    setItem((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function DeleteAllItem()
{
const Delete=window.confirm("Are you sure to delete all item in your list");
if (Delete===true)
  setItem(initialItems);
}
  return (
    <div>
      <Logo />
      <Form onAddItem={handleItem} />
      <PackingList
        items={item}
        deleteItem={handleDelete}
        onToggle={handleToggle}
        DeleteAllItem={DeleteAllItem}
      />
      <Stats item={item} />
    </div>
  );
}






