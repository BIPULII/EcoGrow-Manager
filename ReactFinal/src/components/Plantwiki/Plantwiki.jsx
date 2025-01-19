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
  {
    name: "Jade Plant",
    image: "/src/assets/Container/Jadeplant.jpg", 
    description:"The Jade Plant (Crassula ovata), also known as the Money Plant or Lucky Plant, is a popular succulent recognized for its thick, fleshy leaves and tree-like growth habit. The leaves are typically round or oval, glossy, and a vibrant shade of green, often tinged with red at the edges when exposed to bright sunlight. Native to South Africa, the Jade Plant can grow into a compact shrub or small tree indoors, reaching up to 3–5 feet tall in ideal conditions. Its attractive, woody stems and slow growth make it a favorite choice for bonsai enthusiasts, and it’s often associated with prosperity and good fortune in Feng Shui.",
    care: "Caring for a Jade Plant is straightforward, as it thrives on minimal attention. It prefers bright, indirect sunlight but can tolerate direct morning sun for a few hours daily. Well-draining soil, such as a cactus or succulent mix, is essential to prevent root rot. Water sparingly, allowing the soil to dry out completely between waterings, especially during its dormant period in winter. The Jade Plant thrives in temperatures between 60–75°F (15–24°C) and appreciates low humidity. Avoid overwatering and wipe the leaves occasionally to keep them dust-free and shiny. While it is non-toxic to humans, it can be toxic to pets if ingested, so placement should be considered carefully. With its beauty and resilience, the Jade Plant is a timeless addition to any indoor garden.",
  },
  {
    name: "Peace Lily",
    image: "/src/assets/Container/PeaceLily.jpeg", 
    description:"The Peace Lily (Spathiphyllum spp.) is a graceful and elegant houseplant known for its lush, dark green leaves and distinctive white spathes that surround a spike-like flower, giving it a clean and minimalist appearance. Native to tropical regions of the Americas and Southeast Asia, it thrives in shaded understories, making it an excellent choice for low-light environments. The Peace Lily's white blooms, often mistaken for flowers, are actually modified leaves called bracts that serve to highlight the true flowers at the center. It is also celebrated as a natural air purifier, capable of removing common indoor toxins like benzene and formaldehyde.",
    care: "Caring for a Peace Lily is simple, making it ideal for homes and offices. It prefers bright, indirect light but can adapt to lower light levels, though blooming may be reduced in low light. Keep the soil consistently moist but not waterlogged, allowing the top inch to dry out between waterings. High humidity and temperatures between 65–85°F (18–29°C) are ideal for this tropical plant. Peace Lilies are sensitive to fluoride and chlorine in tap water, so using distilled or filtered water is recommended. While they are non-toxic to humans, they can be mildly toxic to pets if ingested. Regularly wiping the leaves keeps them dust-free and allows them to absorb light effectively. With proper care, the Peace Lily is a stunning and low-maintenance addition to any indoor space.",
  },
  {
    name: "Spider plant",
    image: '/src/assets/Container/SpiderPlant.jpeg',    
    description:"The Spider Plant (Chlorophytum comosum) is a hardy and adaptable houseplant known for its arching, grass-like green leaves, often accented with white or cream stripes, depending on the variety. Native to South Africa, it is beloved for its cascading habit, as mature plants produce long stems with small, star-shaped flowers and offshoots called spiderettes, which resemble baby plants. These spiderettes give the plant its name and make it easy to propagate. A favorite among plant enthusiasts, the Spider Plant is celebrated for its aesthetic appeal, low maintenance, and air-purifying qualities, removing pollutants like carbon monoxide and formaldehyde from indoor environments.",

    care: "Spider Plants thrive in a wide range of conditions, making them perfect for beginners or those with busy schedules. They prefer bright, indirect light but can tolerate lower light levels, although growth may slow. Keep the soil evenly moist, allowing the top inch to dry out between waterings, and reduce watering in winter. The plant is adaptable to different humidity levels and grows well in temperatures between 65–75°F (18–24°C). Use well-draining potting soil and fertilize lightly during the growing season. Brown tips on leaves may appear due to fluoride or chlorine in tap water, so distilled or filtered water is ideal. Non-toxic and pet-friendly, the Spider Plant is an excellent choice for creating a lush, vibrant indoor space.",
},
  {
    name: "Pothos plant",
    image: '/src/assets/Container/Pothos.jpeg',    
    description:"The Pothos plant, also known as Devil's Ivy (Epipremnum aureum), is a popular houseplant celebrated for its attractive, heart-shaped leaves that come in various shades of green, often marbled with yellow, white, or light green variegation. Native to tropical regions of Southeast Asia, this fast-growing vine can adapt to various light conditions, making it an excellent choice for indoor settings. Pothos is a versatile plant, thriving in both soil and water, and its trailing or climbing growth habit makes it perfect for hanging baskets, shelves, or trellises. Its air-purifying qualities add to its charm, making it a favorite among plant enthusiasts.",
    care: "Caring for a Pothos plant is relatively straightforward, as it is a hardy and forgiving plant. It thrives in bright, indirect sunlight but can tolerate low-light conditions, although its growth may slow, and variegation may fade. Water the plant when the top inch of soil feels dry, avoiding overwatering to prevent root rot. Pothos prefers well-draining soil and can benefit from occasional fertilization during the growing season. Regular pruning helps maintain its shape and encourages bushier growth, while propagating cuttings in water or soil ensures you can enjoy more of this beautiful plant.",
  },
  {
    name: "Rubber plant",
    image: '/src/assets/Container/RubberPlant.jpeg',    
    description:"The Rubber Plant (Ficus elastica) is a striking houseplant known for its broad, glossy leaves and bold appearance, making it an eye-catching addition to any indoor space. Native to Southeast Asia, this plant is part of the fig family and is valued for its ability to grow into an impressive tree when given ample room and care. Its leaves are typically deep green, with some varieties showcasing burgundy or creamy variegation. The Rubber Plant is not just aesthetically pleasing but also helps purify indoor air, enhancing the overall environment of your home.",
    care: "Rubber Plants thrive in bright, indirect sunlight but can tolerate some direct morning light. They prefer consistently moist but well-drained soil, so water the plant when the top inch of soil feels dry, ensuring not to overwater. These plants enjoy higher humidity, so occasional misting or placing them near a humidifier can be beneficial. Fertilize the plant monthly during its growing season (spring and summer) with a balanced houseplant fertilizer. Regularly wiping the leaves with a damp cloth helps keep them shiny and free from dust. Pruning can control the size and encourage a bushier growth habit, making the Rubber Plant a low-maintenance yet rewarding choice.",
  },
  {
    name: "ZZ Plant",
    image: '/src/assets/Container/ZZPlant.jpg',    
    description:"The ZZ Plant (Zamioculcas zamiifolia) is a hardy and stylish houseplant known for its glossy, dark green leaves and upright, architectural growth. Native to East Africa, the ZZ Plant is a favorite among indoor plant enthusiasts due to its ability to thrive in low-light environments and tolerate neglect. Its thick, waxy leaves and underground rhizomes store water, making it highly drought-resistant. The ZZ Plant is perfect for beginners and busy individuals who want a low-maintenance plant that adds a touch of elegance to any room.",
    care: "Caring for a ZZ Plant is simple, as it requires minimal attention. It thrives in low to bright indirect light, although it can tolerate low-light conditions for extended periods. Water the plant only when the soil is completely dry, as overwatering can lead to root rot. The ZZ Plant prefers well-draining potting soil and does not require frequent fertilization—feeding it once every few months during the growing season is sufficient. Dusting the leaves occasionally keeps them clean and enhances the plant's natural shine. With its resilience and ease of care, the ZZ Plant is an excellent choice for homes, offices, and even areas with less natural light.",
  },
  {
    name: "Chinese Evergreen",
    image: '/src/assets/Container/ChineseEvergreen.jpg',    
    description:"The Chinese Evergreen (Aglaonema) is a versatile and visually appealing houseplant known for its lush foliage, which comes in a variety of colors and patterns, including green, silver, pink, and red. Native to tropical and subtropical regions of Asia and New Guinea, this plant is highly regarded for its ability to thrive in a wide range of indoor conditions. The Chinese Evergreen’s compact size and vibrant leaves make it a favorite choice for decorating desks, shelves, or corners with limited natural light.",
    care: "The Chinese Evergreen is exceptionally easy to care for, making it ideal for both novice and experienced plant enthusiasts. It thrives in low to medium indirect light, although variegated varieties may benefit from brighter conditions to maintain their vibrant patterns. Water the plant when the top inch of soil feels dry, and ensure the pot has good drainage to prevent overwatering. The plant prefers warm, humid environments but can adapt to standard indoor humidity levels. Fertilize monthly during the growing season with a balanced houseplant fertilizer to promote healthy growth. Regularly wiping the leaves helps maintain their shine and prevents dust buildup, ensuring the Chinese Evergreen remains a vibrant addition to any space.",
  },
  {
    name: "Monstera",
    image: '/src/assets/Container/Monstera.jpg',    
    description:"The Monstera plant (Monstera deliciosa), commonly known as the Swiss Cheese Plant, is a popular tropical houseplant prized for its large, glossy, and uniquely fenestrated leaves. Native to the rainforests of Central and South America, this striking plant adds an exotic and vibrant touch to indoor spaces. Its characteristic holes and splits in the leaves allow it to thrive in its natural environment by letting light pass through to the lower foliage. Monstera plants can grow as climbing vines, making them a perfect choice for trellises or moss poles indoors.",
    care: "Monstera plants thrive in bright, indirect sunlight but can tolerate moderate light conditions. They prefer well-draining soil that retains some moisture, so water the plant when the top 2-3 inches of soil feel dry, ensuring not to overwater. Maintaining a humid environment mimics its tropical origins, and occasional misting can benefit its growth. Fertilize the Monstera monthly during the growing season (spring and summer) with a balanced houseplant fertilizer. As a climbing plant, it may need support, such as a moss pole, to encourage upward growth. Regular cleaning of the leaves helps maintain their glossy appearance and prevents dust accumulation, ensuring this stunning plant continues to thrive and impress.",
  },
  // {
  //   name: "Monstera",
  //   image: '/src/assets/Container/sanke.jpg',    
  //   description:"",
  //   care: "",
  // },
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
