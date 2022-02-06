import React, { useState } from "react";

function States() {
  const [products, setProducts] = useState([
    { id: 1, title: "Milk", color: "red" },
    { id: 2, title: "Bread", color: "red" },
    { id: 3, title: "Tea", color: "red" },
    { id: 4, title: "IceCream", color: "red" },
  ]);

  const changeColor = (elem) => {
    const newArray = products.map((item) => {
      item.color = "red";
      if (item.id === elem.id) {
        item.color = "green";
      }
      return item;
    });
    setProducts(newArray);
  };

  return (
    <div>
      {products.map((item) => (
        <div
          onClick={() => changeColor(item)}
          style={{ border: "1px solid grey", padding: "20px", color: item.color }}
          key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default States;
