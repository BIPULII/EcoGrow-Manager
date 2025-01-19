import React, { useState } from "react";
import "./PlantWiki.css";

const plants = [
  {
    name: "Fiddle Leaf Plant",
    image: "/src/assets/Container/Fiddle.jpg",
    description:
      "The Fiddle Leaf Fig (Ficus lyrata) is a popular tropical plant known for its large, glossy, violin-shaped leaves...",
    care: "Fiddle Leaf Figs thrive in bright, indirect light, but can tolerate some direct sunlight...",
  },
  {
    name: "Snake Plant",
    image: "/src/assets/Container/snake.jpg",
    description:
      "The Snake Plant (Sansevieria trifasciata), commonly called Mother-in-Law's Tongue, is a striking, low-maintenance houseplant...",
    care: "Caring for a snake plant is simple, making it an ideal choice for beginners...",
  },
  // Add other plant objects here...
];

const PlantWiki = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="navbar">
        <div className="container">
          <h1 className="logo">Plant Inventory</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="/aboutus">About Us</a></li> */}
              <li><a href="plantwiki">Plant WIKI</a></li>
              <li><a href="Container">Plant Container</a></li>
              <li><a href="Inventry">Inventory</a></li>
              <li><a href="AboutUs">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="search-section">
          <input
            type="text"
            id="search"
            placeholder="Search for a plant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>

        <section className="plant-list">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <div className="plant-card" key={index}>
                <img src={plant.image} alt={plant.name} />
                <h2>{plant.name}</h2>
                <p>{plant.description}</p>
                <p>
                  <strong>Care:</strong> {plant.care}
                </p>
              </div>
            ))
          ) : (
            <p>No plants found.</p>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Plant Wiki | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default PlantWiki;
