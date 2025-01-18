const plants = [
    {
      name: "Fiddle Leaf Plant",
      image:  '/IMAGES2/Fiddle.jpg', 
      description: "The Fiddle Leaf Fig (Ficus lyrata) is a popular tropical plant known for its large, glossy, violin-shaped leaves. Native to West Africa, it is admired for its bold foliage and is commonly used as an indoor decorative plant in homes and offices. Its vibrant green leaves and impressive height make it a statement plant in any space.",
      care: "Fiddle Leaf Figs thrive in bright, indirect light, but can tolerate some direct sunlight. They prefer a warm environment with temperatures ranging from 60°F to 75°F (15°C to 24°C). It is important to keep the soil consistently moist but not waterlogged, allowing the top few inches to dry between waterings. Regularly dusting the leaves helps maintain their shine and health. Additionally, the Fiddle Leaf Fig benefits from occasional pruning to maintain its shape and promote new growth.",
      
    },
    {
      name: "Snake Plant",
      image: '/IMAGES2/sanke.jpg',    
      description: "The Snake Plant (Sansevieria trifasciata), commonly called Mother-in-Law's Tongue, is a striking, low-maintenance houseplant known for its tall, sword-shaped leaves that grow upright in a rosette pattern. The leaves are often dark green with variegated patterns of light green or yellow, depending on the variety, giving it a bold and modern appearance. This plant is exceptionally hardy and can thrive in a range of indoor conditions, from low light to bright, indirect sunlight. Native to tropical West Africa, it is well-suited for homes and offices, as it not only adds aesthetic appeal but also improves air quality by removing toxins like formaldehyde and benzene.",
      care: "Caring for a snake plant is simple, making it an ideal choice for beginners. It requires well-draining soil, such as cactus or succulent mix, and should be watered sparingly, allowing the soil to dry out completely between waterings to avoid root rot. Snake plants thrive in temperatures between 60–80°F (15–27°C) and are tolerant of both low humidity and neglect. While it can survive in low light, it grows best with bright, indirect sunlight. This plant is mildly toxic to pets and humans if ingested, so care should be taken if placed in homes with children or animals. Its ability to produce oxygen at night makes it a great addition to bedrooms, promoting cleaner air and better sleep.",
    },
   
   {
      name: "Jade Plant",
      image: "/IMAGES2/Jadeplant.jpg", 
      description:"The Jade Plant (Crassula ovata), also known as the Money Plant or Lucky Plant, is a popular succulent recognized for its thick, fleshy leaves and tree-like growth habit. The leaves are typically round or oval, glossy, and a vibrant shade of green, often tinged with red at the edges when exposed to bright sunlight. Native to South Africa, the Jade Plant can grow into a compact shrub or small tree indoors, reaching up to 3–5 feet tall in ideal conditions. Its attractive, woody stems and slow growth make it a favorite choice for bonsai enthusiasts, and it’s often associated with prosperity and good fortune in Feng Shui.",
      care: "Caring for a Jade Plant is straightforward, as it thrives on minimal attention. It prefers bright, indirect sunlight but can tolerate direct morning sun for a few hours daily. Well-draining soil, such as a cactus or succulent mix, is essential to prevent root rot. Water sparingly, allowing the soil to dry out completely between waterings, especially during its dormant period in winter. The Jade Plant thrives in temperatures between 60–75°F (15–24°C) and appreciates low humidity. Avoid overwatering and wipe the leaves occasionally to keep them dust-free and shiny. While it is non-toxic to humans, it can be toxic to pets if ingested, so placement should be considered carefully. With its beauty and resilience, the Jade Plant is a timeless addition to any indoor garden.",
    },
    {
      name: "Peace Lily",
      image: "/IMAGES2/PeaceLily.jpeg", 
      description:"The Peace Lily (Spathiphyllum spp.) is a graceful and elegant houseplant known for its lush, dark green leaves and distinctive white spathes that surround a spike-like flower, giving it a clean and minimalist appearance. Native to tropical regions of the Americas and Southeast Asia, it thrives in shaded understories, making it an excellent choice for low-light environments. The Peace Lily's white blooms, often mistaken for flowers, are actually modified leaves called bracts that serve to highlight the true flowers at the center. It is also celebrated as a natural air purifier, capable of removing common indoor toxins like benzene and formaldehyde.",
      care: "Caring for a Peace Lily is simple, making it ideal for homes and offices. It prefers bright, indirect light but can adapt to lower light levels, though blooming may be reduced in low light. Keep the soil consistently moist but not waterlogged, allowing the top inch to dry out between waterings. High humidity and temperatures between 65–85°F (18–29°C) are ideal for this tropical plant. Peace Lilies are sensitive to fluoride and chlorine in tap water, so using distilled or filtered water is recommended. While they are non-toxic to humans, they can be mildly toxic to pets if ingested. Regularly wiping the leaves keeps them dust-free and allows them to absorb light effectively. With proper care, the Peace Lily is a stunning and low-maintenance addition to any indoor space.",
    },
    {
      name: "Spider plant",
      image: '/IMAGES2/SpiderPlant.jpeg',    
      description:"The Spider Plant (Chlorophytum comosum) is a hardy and adaptable houseplant known for its arching, grass-like green leaves, often accented with white or cream stripes, depending on the variety. Native to South Africa, it is beloved for its cascading habit, as mature plants produce long stems with small, star-shaped flowers and offshoots called spiderettes, which resemble baby plants. These spiderettes give the plant its name and make it easy to propagate. A favorite among plant enthusiasts, the Spider Plant is celebrated for its aesthetic appeal, low maintenance, and air-purifying qualities, removing pollutants like carbon monoxide and formaldehyde from indoor environments.",

      care: "Spider Plants thrive in a wide range of conditions, making them perfect for beginners or those with busy schedules. They prefer bright, indirect light but can tolerate lower light levels, although growth may slow. Keep the soil evenly moist, allowing the top inch to dry out between waterings, and reduce watering in winter. The plant is adaptable to different humidity levels and grows well in temperatures between 65–75°F (18–24°C). Use well-draining potting soil and fertilize lightly during the growing season. Brown tips on leaves may appear due to fluoride or chlorine in tap water, so distilled or filtered water is ideal. Non-toxic and pet-friendly, the Spider Plant is an excellent choice for creating a lush, vibrant indoor space.",
  },
    {
      name: "Pothos plant",
      image: '/IMAGES2/Pothos.jpeg',    
      description:"",
      care: "",
    },
    {
      name: "Rubber plant",
      image: '/IMAGES2/RubberPlant.jpeg',    
      description:"",
      care: "",
    },
    {
      name: "ZZ Plant",
      image: '/IMAGES2/ZZPlant.jpg',    
      description:"",
      care: "",
    },
    {
      name: "Chinese Evergreen",
      image: '/IMAGES2/sanke.jpg',    
      description:"",
      care: "",
    },
    {
      name: "Monstera",
      image: '/IMAGES2/sanke.jpg',    
      description:"",
      care: "",
    },
    {
      name: "Monstera",
      image: '/IMAGES2/sanke.jpg',    
      description:"",
      care: "",
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
  