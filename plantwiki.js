const plants = [
    {
      name: "Fiddle Leaf Plant",
      image:  '/IMAGES2/Fiddle.jpg', // Replace with actual image URL
      description: "The Fiddle Leaf Fig (Ficus lyrata) is a popular tropical plant known for its large, glossy, violin-shaped leaves. Native to West Africa, it is admired for its bold foliage and is commonly used as an indoor decorative plant in homes and offices. Its vibrant green leaves and impressive height make it a statement plant in any space.",
      care: "Fiddle Leaf Figs thrive in bright, indirect light, but can tolerate some direct sunlight. They prefer a warm environment with temperatures ranging from 60°F to 75°F (15°C to 24°C). It is important to keep the soil consistently moist but not waterlogged, allowing the top few inches to dry between waterings. Regularly dusting the leaves helps maintain their shine and health. Additionally, the Fiddle Leaf Fig benefits from occasional pruning to maintain its shape and promote new growth.",
      
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
  