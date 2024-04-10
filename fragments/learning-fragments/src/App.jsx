import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
  let foodItems = ["Green vegtable", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy Foods</h1>

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
