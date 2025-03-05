// import React from "react";
// import "./Inventory.css";

// const Inventory = () => {
//   return (
//     <div>
//       {/* Inventory Section */}
//       <section id="inventory" className="inventory-section">
//         <div className="container">
//           <h2 className="section-title">Plant Inventory</h2>
//           <table className="inventory-table">
//             <thead>
//               <tr>
//                 <th>Plant Name</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//                 <th>Price</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Snake Plant</td>
//                 <td>Indoor</td>
//                 <td>20</td>
//                 <td>$10.00</td>
//                 <td>
//                   <button className="btn edit">Edit</button>
//                   <button className="btn delete">Delete</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Fiddle Leaf Fig</td>
//                 <td>Indoor</td>
//                 <td>15</td>
//                 <td>$25.00</td>
//                 <td>
//                   <button className="btn edit">Edit</button>
//                   <button className="btn delete">Delete</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <a href="#add-plant" className="btn">Add New Plant</a>
//         </div>
//       </section>

//       {/* Other Sections */}
//       {/* Orders Section */}
//       <section id="orders" className="orders-section">
//         <div className="container">
//           <h2 className="section-title">Manage Orders</h2>
//           <table className="orders-table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Customer Name</th>
//                 <th>Order Date</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>001</td>
//                 <td>Jane Doe</td>
//                 <td>2024-12-21</td>
//                 <td>Completed</td>
//                 <td>
//                   <button className="btn view">View</button>
//                   <button className="btn delete">Delete</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
     

//     <section id="customers" class="customers-section">
//         <div class="container">
//             <h2 class="section-title">Manage Customers</h2>
//             <table class="customers-table">
//                 <thead>
//                     <tr>
//                         <th>Customer ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>C001</td>
//                         <td>John Smith</td>
//                         <td>john@example.com</td>
//                         <td>123-456-7890</td>
//                         <td><button class="btn edit">Edit</button> <button class="btn delete">Delete</button></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </section>


//     <footer>
//         <div class="container">
//             <p>&copy; 2024 Plant Inventory Management. All Rights Reserved.</p>
//         </div>
//     </footer>

//       {/* Add other sections for Users, Customers, and Categories similarly */}
//     </div>
//   );
// };

// export default Inventory;
import "./Inventory.css";
import React, { useState } from 'react';

const Inventory = () => {
    const [plants, setPlants] = useState([
        { id: 1, name: 'Snake Plant', category: 'Indoor', stock: 20, price: 10.00 },
        { id: 2, name: 'Fiddle Leaf Fig', category: 'Indoor', stock: 15, price: 25.00 }
    ]);
    
    const [orders, setOrders] = useState([
        { id: '001', customerName: 'Jane Doe', date: '2024-12-21', status: 'Completed' }
    ]);

    const [customers, setCustomers] = useState([
        { id: 'C001', name: 'John Smith', email: 'john@example.com', phone: '123-456-7890' }
    ]);

    return (
        <div>
            {/* Order Edit Section */}
            <section id="order-edit" className="order-edit-section">
                <div className="container">
                    <h2 className="section-title">Edit Order</h2>
                    <form>
                        <label>Order ID:</label>
                        <input type="text" name="orderId" />
                        
                        <label>Customer Name:</label>
                        <input type="text" name="customerName" />
                        
                        <label>Customer Contact No:</label>
                        <input type="text" name="customerContact" />
                        
                        <label>Plant Name:</label>
                        <select>
                            {plants.map((plant) => (
                                <option key={plant.id}>{plant.name}</option>
                            ))}
                        </select>
                        
                        <label>Quantity:</label>
                        <input type="number" name="quantity" />
                        
                        <button className="btn update">Update Order</button>
                    </form>
                </div>
            </section>

            {/* Place Order Section */}
            <section id="place-order" className="place-order-section">
                <div className="container">
                    <h2 className="section-title">Place Order</h2>
                    <form>
                        <label>Customer Name:</label>
                        <input type="text" name="customerName" />
                        
                        <label>Customer Contact No:</label>
                        <input type="text" name="customerContact" />
                        
                        <label>Customer Email:</label>
                        <input type="email" name="customerEmail" />
                        
                        <label>Plant Name:</label>
                        <select>
                            {plants.map((plant) => (
                                <option key={plant.id}>{plant.name}</option>
                            ))}
                        </select>
                        
                        <label>Quantity:</label>
                        <input type="number" name="quantity" />
                        
                        <button className="btn place-order">Place Order</button>
                    </form>
                </div>
            </section>

            {/* Order Removal Section */}
            <section id="order-removal" className="order-removal-section">
                <div className="container">
                    <h2 className="section-title">Remove Order</h2>
                    <form>
                        <label>Order ID:</label>
                        <input type="text" name="orderId" />
                        
                        <button className="btn remove-order">Remove Order</button>
                    </form>
                </div>
            </section>

            {/* Plant Manager Section */}
            <section id="plant-manager" className="plant-manager-section">
                <div className="container">
                    <h2 className="section-title">Plant Inventory</h2>
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Plant Name</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant) => (
                                <tr key={plant.id}>
                                    <td>{plant.name}</td>
                                    <td>{plant.category}</td>
                                    <td>{plant.stock}</td>
                                    <td>${plant.price.toFixed(2)}</td>
                                    <td>
                                        <button className="btn edit">Edit</button>
                                        <button className="btn delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="btn">Add New Plant</button>
                </div>
            </section>
        </div>
    );
};

export default Inventory;
