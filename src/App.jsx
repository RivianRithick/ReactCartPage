import React from "react";
import { useState } from "react";
import Home from "./Components/Home";

const App = () => {
  const data = [
    {
      id: 1,
      name: "Vandal",
      price: "$50",
    },
    {
      id: 2,
      name: "Phantom",
      price: "$45",
    },
    {
      id: 3,
      name: "Bulldog",
      price: "$30",
    },
    {
      id: 4,
      name: "Marshal",
      price: "$25",
    },
    {
      id: 5,
      name: "Stinger",
      price: "$20",
    },
    {
      id: 6,
      name: "Sprectre",
      price: "$40",
    },
    {
      id: 7,
      name: "Ares",
      price: "$60",
    },
    {
      id: 8,
      name: "Bucky",
      price: "$15",
    },
  ];
  const [cartItems, setCartItems] = useState(data);
  return (
    <div>
      <Home cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default App;
