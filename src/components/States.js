import React, { useState } from "react";

function States() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Milk",
      color: "red",
      fontSize: "14px",
      fontWeight: "normal"
    },
    {
      id: 2,
      title: "Bread",
      color: "red",
      fontSize: "14px",
      fontWeight: "normal"
    },
    {
      id: 3,
      title: "Tea",
      color: "red",
      fontSize: "14px",
      fontWeight: "normal"
    },
    {
      id: 4,
      title: "IceCream",
      color: "red",
      fontSize: "14px",
      fontWeight: "normal"
    }
  ]);

  const changeColor = (elem) => {
    const newArray = products.map((item) => {
      item.color = "red";
      item.fontSize = "14px";
      item.fontWeight = "normal";
      if (item.id === elem.id) {
        item.color = "blue";
        item.fontSize = "16px";
        item.fontWeight = "bold";
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
          style={{
            cursor: "pointer",
            border: "1px solid grey",
            padding: "20px",
            color: item.color,
            fontSize: item.fontSize,
            fontWeight: item.fontWeight
          }}
          key={item.id}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default States;
