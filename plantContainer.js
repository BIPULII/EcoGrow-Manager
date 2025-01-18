document.addEventListener('DOMContentLoaded', () => {
    const plantContainer = document.getElementById('plantContainer');
    const searchBar = document.getElementById('searchBar');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');

    const plants = [
        { id: 1, title: 'Fiddle Leaf Plant', description: 'A popular indoor plant with large, glossy leaves.', price: 20, image: '/IMAGES2/Fiddle.jpg' },
        { id: 2, title: 'Snake Plant', description: 'An easy-care plant with tall, sturdy leaves.', price: 15, image: '/IMAGES2/sanke.jpg' },
        { id: 3, title: 'Jade plant', description: 'An easy-care plant with tall, sturdy leaves.', price: 19, image: '/IMAGES2/Jadeplant.jpg' },
        { id: 4, title: 'Peace Lily', description: 'A well-grown peace lily may bloom twice a year.', price: 25, image: '/IMAGES2/PeaceLily.jpeg' },
        { id: 5, title: 'Spider plant', description: 'Very easy to grow indoors in medium to bright light.', price: 9, image: '/IMAGES2/SpiderPlant.jpeg' },
        { id: 6, title: 'Pothos plant', description: 'An evergreen plant with heart-shaped leaves with splashes of yellow.', price: 10, image: '/IMAGES2/Pathos.jpeg' },
        { id: 7, title: 'Rubber plant', description: 'Very easy to grow indoors in medium to bright light.', price: 11, image: '/IMAGES2/RubberPlant.jpeg' },
        { id: 8, title: 'ZZ Plant', description: 'Shiny, oval-shaped, deep green leaves.', price: 10, image: '/IMAGES2/ZZPlant.jpeg' },
        { id: 9, title: 'Chinese Evergreen', description: 'Thick, waxy, green leaves with splashes of yellow.', price: 21, image: '/IMAGES2/ChineseEvergreen.jpeg' },
        { id: 10, title: 'Monstera', description: 'Grows best in humid and warm environments, requiring partial light.', price: 30, image: '/IMAGES2/Monstera.jpeg' }
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

        const existingItem = Array.from(cartItems.children).find(item => 
            item.dataset.plantId === String(plant.id)
        );

        if (existingItem) {
            const existingQuantity = parseInt(existingItem.dataset.quantity);
            const newQuantity = existingQuantity + quantity;
            const newTotal = newQuantity * plant.price;
            existingItem.textContent = `${plant.title} - LKR.${newTotal.toFixed(2)} (${newQuantity} pcs)`;
            existingItem.dataset.quantity = newQuantity;
        } else {
            const listItem = document.createElement('li');
            listItem.dataset.plantId = String(plant.id);
            listItem.dataset.quantity = quantity;
            listItem.dataset.unitPrice = plant.price;
            listItem.textContent = `${plant.title} - LKR.${total.toFixed(2)} (${quantity} pcs)`;
            cartItems.appendChild(listItem);
        }

        const currentTotal = parseFloat(totalPrice.textContent) || 0;
        totalPrice.textContent = (currentTotal + total).toFixed(2);

        // Ensure alert is displayed
        alert(`${plant.title} added to cart successfully!`);
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPlants = plants.filter(plant => plant.title.toLowerCase().includes(searchTerm));
        renderPlants(filteredPlants);
    });

    checkoutButton.addEventListener('click', () => {
        const cartItemsList = Array.from(cartItems.children);
        if (cartItemsList.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        let billWindow = window.open('', '_blank', 'width=600,height=400');
        billWindow.document.write('<h1>Checkout Summary</h1>');
        billWindow.document.write('<table border="1" style="width: 100%; text-align: left;">');
        billWindow.document.write('<thead><tr><th>Item</th><th>Quantity</th><th>Unit Price</th><th>Total Price</th></tr></thead>');
        billWindow.document.write('<tbody>');

        let overallTotal = 0;

        cartItemsList.forEach(item => {
            const title = item.textContent.split(' - ')[0];
            const quantity = item.dataset.quantity;
            const unitPrice = item.dataset.unitPrice;
            const totalPrice = parseFloat(quantity) * parseFloat(unitPrice);

            billWindow.document.write(`
                <tr>
                    <td>${title}</td>
                    <td>${quantity}</td>
                    <td>LKR.${parseFloat(unitPrice).toFixed(2)}</td>
                    <td>LKR.${totalPrice.toFixed(2)}</td>
                </tr>
            `);

            overallTotal += totalPrice;
        });

        billWindow.document.write('</tbody>');
        billWindow.document.write(`
            <tfoot>
                <tr>
                    <td colspan="3"><strong>Total</strong></td>
                    <td><strong>LKR.${overallTotal.toFixed(2)}</strong></td>
                </tr>
            </tfoot>
        `);
        billWindow.document.write('</table>');
        billWindow.document.close();
    });

    totalPrice.textContent = '0.00';
    renderPlants(plants);
});
