import React, { useState } from "react";
import "./Container.css";

const plants = [
  {
    id: 1,
    title: "Fiddle Leaf Plant",
    description: "A popular indoor plant with large, glossy leaves.",
    price: 20,
    image: "/src/assets/Container/Fiddle.jpg",
  },
  {
    id: 2,
    title: "Snake Plant",
    description: "An easy-care plant with tall, sturdy leaves.",
    price: 15,
    image: "/src/assets/Container/snake.jpg",
  },
  {
    id: 3,
    title: "Jade Plant",
    description: "An easy-care plant with tall, sturdy leaves.",
    price: 19,
    image: "/src/assets/Container/Jadeplant.jpg",
  },
  {
    id: 4,
    title: "Peace Lily",
    description: "A well-grown peace lily may bloom twice a year.",
    price: 25,
    image: "/src/assets/Container/PeaceLily.jpeg",
  },
  // Add remaining plant objects here...
];

const PlantContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPlants = plants.filter((plant) =>
    plant.title.toLowerCase().includes(searchTerm)
  );

  const addToCart = (plant, quantity) => {
    const existingPlant = cart.find((item) => item.id === plant.id);
    const newCart = existingPlant
      ? cart.map((item) =>
          item.id === plant.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * item.price,
              }
            : item
        )
      : [
          ...cart,
          {
            ...plant,
            quantity,
            total: plant.price * quantity,
          },
        ];

    setCart(newCart);
    setTotalPrice((prev) => prev + plant.price * quantity);
    alert(`${plant.title} added to cart successfully!`);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let summary = `<h1>Checkout Summary</h1>`;
    summary += `<table border="1" style="width: 100%; text-align: left;">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>`;

    cart.forEach((item) => {
      summary += `
        <tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>LKR.${item.price.toFixed(2)}</td>
          <td>LKR.${item.total.toFixed(2)}</td>
        </tr>`;
    });

    summary += `
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"><strong>Total</strong></td>
          <td><strong>LKR.${totalPrice.toFixed(2)}</strong></td>
        </tr>
      </tfoot>
    </table>`;

    const billWindow = window.open("", "_blank", "width=600,height=400");
    billWindow.document.write(summary);
    billWindow.document.close();
  };

  return (
    <div>
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Plant Inventory</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/plantwiki">Plant Wiki</a></li>
              <li><a href="/inventory">Inventory Management</a></li>
              <li><a href="plantwiki">Plant WIKI</a></li>
              <li><a href="Container">Plant Container</a></li>
              <li><a href="Inventry">Inventory</a></li>
              <li><a href="AboutUs">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <header>
        <input
          type="text"
          id="searchBar"
          placeholder="Search for plants..."
          onChange={handleSearch}
        />
      </header>

      <main>
        <div id="plantContainer">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.title} />
              <h3>{plant.title}</h3>
              <p>{plant.description}</p>
              <p>Price: LKR.{plant.price.toFixed(2)}</p>
              <input
                type="number"
                min="1"
                defaultValue="1"
                id={`quantity-${plant.id}`}
              />
              <button
                onClick={() => {
                  const quantity = parseInt(
                    document.getElementById(`quantity-${plant.id}`).value
                  );
                  addToCart(plant, quantity);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <div id="cart">
        <h2>Shopping Cart</h2>
        <ul id="cartItems">
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - LKR.{item.total.toFixed(2)} ({item.quantity} pcs)
            </li>
          ))}
        </ul>
        <p>Total: LKR.{totalPrice.toFixed(2)}</p>
        <button id="checkoutButton" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PlantContainer;
