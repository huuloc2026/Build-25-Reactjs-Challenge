import React, { useState } from "react";

const macbooks = [
  { id: 1, name: "MacBook Air M1", price: 999 },
  { id: 2, name: "MacBook Pro 13 M1", price: 1299 },
  { id: 3, name: "MacBook Pro 14 M1 Pro", price: 1999 },
  { id: 4, name: "MacBook Pro 16 M1 Pro", price: 2499 },
  { id: 5, name: "MacBook Air M2", price: 1099 },
  { id: 6, name: "MacBook Pro 13 M2", price: 1399 },
  { id: 7, name: "MacBook Pro 14 M2 Pro", price: 2099 },
  { id: 8, name: "MacBook Pro 16 M2 Pro", price: 2599 },
  { id: 9, name: "MacBook Air 2020", price: 899 },
  { id: 10, name: "MacBook Pro 16 2019", price: 2399 },
];

const ShoppingList = () => {
  const [selected, setSelected] = useState([]);
  const handleSelected = (getCurrentId) => {
    setSelected((prevState) => {
      if (prevState.includes(getCurrentId)) {
        return prevState.filter((item) => item !== getCurrentId);
      }
      return [...prevState, getCurrentId];
    });
  };
  console.log(selected);

  return (
    <div>
      <h1>List Products: </h1>
      {macbooks && macbooks.length > 0 ? (
        <ul>
          {macbooks.map((item) => (
            <li
              key={item.id}
              style={selected.includes(item.id) ? { color: "green" } : null}
              onClick={() => handleSelected(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>No data found</div>
      )}
      <h1>List Products Selected: </h1>
      <ul>
        {/* {selected.map((itemSelected) => {
          return <li key={itemSelected.id}>{itemSelected.name}</li>;
        })} */}
        {selected.map((itemId) => {
          const item = macbooks.find((macbook) => macbook.id === itemId);
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
