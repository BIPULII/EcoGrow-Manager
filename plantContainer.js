document.addEventListener('DOMContentLoaded', () => {
    const plantContainer = document.getElementById('plantContainer');
    const searchBar = document.getElementById('searchBar');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');

    const plants = [
        {
            id: 1,
            title: 'Fiddle Leaf Plant',
            description: 'A popular indoor plant with large, glossy leaves.',
            price: 20,
            image: '/IMAGES2/Fiddle.jpg'
        },
        {
            id: 2,
            title: 'Snake Plant',
            description: 'An easy-care plant with tall, sturdy leaves.',
            price: 15,
            image: '/IMAGES2/sanke.jpg'
        },
        {
            id: 3,
            title: 'Jade plant',
            description: 'An easy-care plant with tall, sturdy leaves.',
            price: 19,
            image: '/IMAGES2/Jadeplant.jpg'
        },
        // Add more plants as needed
    ];

    function renderPlants(plants) {
        plantContainer.innerHTML = '';
        plants.forEach(plant => {
            const plantCard = document.createElement('div');
            plantCard.className = 'plant-card';
            plantCard.innerHTML = `
                <img src="${plant.image}" alt="${plant.title}">
                <h3>${plant.title}</h3>
                <p>${plant.description}</p>
                <p>Price: $${plant.price.toFixed(2)}</p>
                <input type="number" min="1" value="1" id="quantity-${plant.id}">
                <button onclick="addToCart(${plant.id})">Add to Cart</button>
            `;
            plantContainer.appendChild(plantCard);
        });
    }

    function addToCart(id) {
        const plant = plants.find(plant => plant.id === id);
        const quantityInput = document.getElementById(`quantity-${plant.id}`);
        const quantity = parseInt(quantityInput.value);
        const total = plant.price * quantity;
        const listItem = document.createElement('li');
        listItem.textContent = `${plant.title} - $${total.toFixed(2)} (${quantity} pcs)`;
        cartItems.appendChild(listItem);
        const currentTotal = parseFloat(totalPrice.textContent);
        totalPrice.textContent = (currentTotal + total).toFixed(2);
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPlants = plants.filter(plant => plant.title.toLowerCase().includes(searchTerm));
        renderPlants(filteredPlants);
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout functionality is not implemented yet.');
    });

    renderPlants(plants);
});
