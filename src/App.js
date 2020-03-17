import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const product = [
    { name: "Photoshop", price: "$44" },
    { name: "Ilssssss", price: "$10" },
    { name: "Adobi", price: "$50" },
    { name: "Chroma", price: "$60" }
  ];

  const friends = [
    { name: "Ayesha", age: "30", habit: "Facebook" },
    { name: "Muntaha", age: "20", habit: "Boka" }
  ];
  //use component as html tag using map(insted of for loop)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mashiur Rahman</h1>

        <Users></Users>

        {friends.map(friend => (
          <Friends friends={friend}></Friends>
        ))}

        {product.map(product => (
          <Products product={product}></Products>
        ))}
      </header>
    </div>
  );
}

//declare component
//load data from server
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(x => x.json())
      .then(a => setUsers(a));
  });

  return (
    <div>
      <h1>Dynamic Users: {users.length} </h1>
      <ol>
        {users.map(user => (
          <li>
            {"Name:-"} {user.name} {<br></br>}
            {"Email:-"} {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Products(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    padding: "10px",
    float: "left",
    color: "black"
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Friends(props) {
  const friendsStyle = {
    backgroundColor: "gray",
    color: "black",
    height: "200px",
    width: "300px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px"
  };

  const { name, age, habit } = props.friends;
  return (
    <div style={friendsStyle}>
      <h2>{name}</h2>
      <p style={{ fontWeight: "bold" }}>{age}</p>
      <h2>{habit}</h2>
    </div>
  );
}

export default App;
