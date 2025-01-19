import React from "react";
import "./Inventory.css";

const Inventory = () => {
  return (
    <div>
      {/* <header className="navbar">
        <div className="container">
          <h1 className="logo">Plant Inventory Management</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#inventory">Inventory</a></li>
              <li><a href="#orders">Manage Orders</a></li>
              <li><a href="#users">Manage Users</a></li>
              <li><a href="#customers">Manage Customers</a></li>
              <li><a href="#categories">Manage Categories</a></li>
              <li><a href="plantwiki">Plant WIKI</a></li>
              <li><a href="Container">Plant Container</a></li>
              <li><a href="Inventry">Inventory</a></li>
              <li><a href="AboutUs">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      {/* Inventory Section */}
      <section id="inventory" className="inventory-section">
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
              <tr>
                <td>Snake Plant</td>
                <td>Indoor</td>
                <td>20</td>
                <td>$10.00</td>
                <td>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Fiddle Leaf Fig</td>
                <td>Indoor</td>
                <td>15</td>
                <td>$25.00</td>
                <td>
                  <button className="btn edit">Edit</button>
                  <button className="btn delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="#add-plant" className="btn">Add New Plant</a>
        </div>
      </section>

      {/* Other Sections */}
      {/* Orders Section */}
      <section id="orders" className="orders-section">
        <div className="container">
          <h2 className="section-title">Manage Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Jane Doe</td>
                <td>2024-12-21</td>
                <td>Completed</td>
                <td>
                  <button className="btn view">View</button>
                  <button className="btn delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="users" class="users-section">
        <div class="container">
            <h2 class="section-title">Manage Users</h2>
            <table class="users-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>U001</td>
                        <td>AdminUser</td>
                        <td>Administrator</td>
                        <td><button class="btn edit">Edit</button> <button class="btn delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section id="customers" class="customers-section">
        <div class="container">
            <h2 class="section-title">Manage Customers</h2>
            <table class="customers-table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C001</td>
                        <td>John Smith</td>
                        <td>john@example.com</td>
                        <td>123-456-7890</td>
                        <td><button class="btn edit">Edit</button> <button class="btn delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section id="categories" class="categories-section">
        <div class="container">
            <h2 class="section-title">Manage Plant Categories</h2>
            <table class="categories-table">
                <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cat001</td>
                        <td>Indoor</td>
                        <td><button class="btn edit">Edit</button> <button class="btn delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Plant Inventory Management. All Rights Reserved.</p>
        </div>
    </footer>

      {/* Add other sections for Users, Customers, and Categories similarly */}
    </div>
  );
};

export default Inventory;
