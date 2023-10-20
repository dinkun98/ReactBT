import React from "react";

export const RenderWithMap = () => {
  const products = [
    {
      name: "Samsung",
      price: 100,
      color: "Black",
    },
    {
      name: "Iphone",
      price: 100,
      color: "Black",
    },
    {
      name: "Nokia",
      price: 100,
      color: "Black",
    },
    {
      name: "Sony",
      price: 100,
      color: "Black",
    },
  ];

  return (
    <div className="container mt-3">
      <h1> RenderWithMap</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {products.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.color}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
