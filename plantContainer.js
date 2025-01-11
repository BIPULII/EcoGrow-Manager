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
        {
            id: 4,
            title: 'Peace Lily',
            description: 'A well-grown peace lily may bloom twice a year.',
            price: 25,
            image: '/IMAGES2/PeaceLily.jpeg'
            //
        },
        {
            id: 5,
            title: 'Spider plant',
            description: ' very easy to grow indoors in medium to bright light throughout the year.',
            price: 9,
            image: '/IMAGES2/SpiderPlant.jpeg'
        },
        {
            id: 6,
            title: 'Pothos plant',
            description: '  an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow.',
            price: 10,
            image: '/IMAGES2/Pathos.jpeg'
        },
        
        {
            id: 7,
            title: 'Rubber plant',
            description: ' very easy to grow indoors in medium to bright light throughout the year.',
            price: 11,
            image: '/IMAGES2/RubberPlant.jpeg'
        },
        {
            id: 8,
            title: 'ZZ Plant',
            description: 'This tropical plant, with its upright growth, and shiny, oval-shaped, deep green leaves.',
            price: 10,
            image: '/IMAGES2/ZZPlant.jpeg'
        },
        {
            id: 9,
            title: 'Chinese Evergreen',
            description: '  an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow.',
            price: 21,
            image: '/IMAGES2/ChineseEvergreen.jpeg'
        },
        {
            id: 10,
            title: 'Monstera',
            description: 'grows best in humid and warm environments, requiring dappled or partial ligh',
            price: 30,
            image: '/IMAGES2/Monstera.jpeg'
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
                <p>Price: LKR.${plant.price.toFixed(2)}</p>
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
        listItem.textContent = `${plant.title} - LKR.${total.toFixed(2)} (${quantity} pcs)`;
        cartItems.appendChild(listItem);
        const currentTotal = parseFloat(totalPrice.textContent);
        totalPrice.textContent = (currentTotal + total).toFixed(2);
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPlants = plants.filter(plant => plant.title.toLowerCase().includes(searchTerm));
        renderPlants(filteredPlants);
    });

    // checkoutButton.addEventListener('click', () => {
    //     alert('Checkout functionality is not implemented yet.');
    // });
    checkoutButton.addEventListener('click', () => {
        // Get all items in the cart
        const cartItemsList = Array.from(cartItems.children);
        if (cartItemsList.length === 0) {
            alert('Your cart is empty!');
            return;
        }
    
        // Create a summary of the order
        const orderSummary = cartItemsList.map(item => item.textContent).join('\n');
        const totalCost = totalPrice.textContent;
    
        // Show the order summary and confirmation
        const confirmation = confirm(
            `Order Summary:\n${orderSummary}\n\nTotal Price: LKR.${totalCost}\n\nDo you want to confirm the order?`
        );
    
        if (confirmation) {
            // Clear the cart and reset UI
            cartItems.innerHTML = '';
            totalPrice.textContent = '0.00';
            alert('Your order has been placed successfully!');
        }
    });
    

    renderPlants(plants);
});
