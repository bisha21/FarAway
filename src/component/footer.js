import React from "react";

function Stats({ item }) {
    const numItem = item.length;
    const itemPacked = item.filter((item) => item.packed).length;
    const percentage = itemPacked * 20;
    return (
      <em>
        <footer className="stats">
          {percentage < 100
            ? `You have ${numItem} item on your list,and you already pack ${itemPacked}(${percentage}%)`
            : "Your bag is full"}
        </footer>
      </em>
    );
  }
  export default Stats;