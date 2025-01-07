const plants = [
    {
      name: "Snake Plant",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description: "A hardy, low-maintenance plant perfect for beginners.",
      care: "Water once every 2 weeks; indirect sunlight.",
    },
    {
      name: "Monstera Deliciosa",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description: "A striking plant with split leaves, great for homes.",
      care: "Water weekly; bright, indirect sunlight.",
    },
    {
      name: "Aloe Vera",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description: "Known for its medicinal uses, easy to grow indoors.",
      care: "Water when soil is dry; bright sunlight.",
    },
  ];
  
  const plantList = document.getElementById("plant-list");
  const searchInput = document.getElementById("search");
  
  function displayPlants(filter = "") {
    plantList.innerHTML = "";
    plants
      .filter((plant) =>
        plant.name.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach((plant) => {
        const plantCard = document.createElement("div");
        plantCard.classList.add("plant-card");
        plantCard.innerHTML = `
          <img src="${plant.image}" alt="${plant.name}">
          <h2>${plant.name}</h2>
          <p>${plant.description}</p>
          <p><strong>Care:</strong> ${plant.care}</p>
        `;
        plantList.appendChild(plantCard);
      });
  }
  
  searchInput.addEventListener("input", (e) => {
    displayPlants(e.target.value);
  });
  
  displayPlants();
  