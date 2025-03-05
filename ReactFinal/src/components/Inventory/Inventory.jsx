// export default Inventory;
import "./Inventory.css";
import React, { useState } from 'react';
import axios from "axios";

const Inventory = () => {
    const [plants] = useState([
        { id: 1, name: 'Snake Plant', category: 'Indoor', stock: 20, price: 10.00 },
        { id: 2, name: 'Jade Plant', category: 'Indoor', stock: 15, price: 25.00 },
        { id: 3, name: 'Fiddle Leaf Plant', category: 'Indoor', stock: 10, price: 15.00 },
        { id: 4, name: 'Piece Lily', category: 'Indoor', stock: 5, price: 20.00 },
        { id: 5, name: 'Rubber Plant', category: 'Indoor', stock: 25, price: 12.00 },
        { id: 6, name: 'Spider Plant', category: 'Indoor', stock: 30, price: 8.00 },
        { id: 7, name: 'Pothos', category: 'Indoor', stock: 15, price: 10.00 },
        { id: 8, name: 'ZZ Plant', category: 'Indoor', stock: 10, price: 15.00 },
        { id: 9, name: 'Chinese Evergreen Plant', category: 'Indoor', stock: 20, price: 25.00 },
        { id: 10, name: 'Monstera Plant', category: 'Indoor', stock: 15, price: 20.00 },
    ]);
    
    const [orders, setOrders] = useState([
        { id: '001', customerName: 'Jane Doe', date: '2024-12-21', status: 'Completed' }
    ]);

    const [orderData, setOrderData] = useState({
        order_id: "",
        customer_name: "",
        contact_No: "",
        plant_name: "",
        quantity: ""
    });

    // const fetchOrder = async () => {
    //     if (!orderData.order_id) return;
    //     try {
    //         const res = await axios.get(`http://localhost:5014/getOrder/${orderData.order_id}`);
    //         setOrderData(res.data);
    //     } catch (error) {
    //         alert("Order not found");
    //     }
    // };
    // Update the fetchOrder function
const fetchOrder = async () => {
  if (!orderData.order_id) return;
  try {
    const res = await axios.get(`http://localhost:5014/getOrder/${orderData.order_id}`);
    setOrderData({
      order_id: res.data.order_id,
      customer_name: res.data.customer_name,
      contact_No: res.data.contact_No,
      plant_name: res.data.plant_name,
      quantity: res.data.quantity
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    alert("Order not found");
  }
};
// Update the updateOrder function
    const updateOrder = async (e) => {
        e.preventDefault();
        if (!orderData.order_id || !orderData.customer_name || !orderData.contact_No || 
          !orderData.plant_name || !orderData.quantity) {
        alert("All fields are required");
        return;
      }
      try {
        const response = await axios.put("http://localhost:5014/updateOrder", {
          order_id: orderData.order_id,
          customer_name: orderData.customer_name,
          contact_No: orderData.contact_No,
          plant_name: orderData.plant_name,
          quantity: parseInt(orderData.quantity)
        });
    
        if (response.data) {
          alert("Order updated successfully!");
          // Reset form
          setOrderData({
            order_id: "",
            customer_name: "",
            contact_No: "",
            plant_name: "",
            quantity: ""
          });
        }
      } catch (error) {
        console.error("Error updating order:", error);
        alert(error.response?.data?.error || "Error updating order");
      }

        // try {
        //     await axios.put("http://localhost:5014/updateOrder", orderData);
        //     alert("Order updated successfully!");
        // } catch (error) {
        //     alert("Error updating order");
        // }
    };
    //place order data
    const [placeOrderData, setPlaceOrderData] = useState({
        customer_name: "",
        contact_No: "",
        customer_email: "",
        plant_name: "",
        quantity: ""
      });
      
      // Add this function for handling place order
      const handlePlaceOrder = async (e) => {
        e.preventDefault();
        // Validate all required fields
      if (!placeOrderData.customer_name || 
          !placeOrderData.contact_No || 
          !placeOrderData.customer_email || 
          !placeOrderData.plant_name || 
          !placeOrderData.quantity) {
  alert("Please fill in all fields");
  return;
}

try {
  console.log("Sending order data:", placeOrderData);
  
  const response = await axios.post("http://localhost:5014/placeOrder", {
    customer_name: placeOrderData.customer_name,
    contact_No: placeOrderData.contact_No,
    customer_email: placeOrderData.customer_email,
    plant_name: placeOrderData.plant_name,
    quantity: parseInt(placeOrderData.quantity)
  });

  if (response.data) {
    alert(`Order placed successfully! Order ID: ${response.data.orderId}`);
    // Reset form
    setPlaceOrderData({
      customer_name: "",
      contact_No: "",
      customer_email: "",
      plant_name: "",
      quantity: ""
    });
  }
} catch (error) {
  console.error("Error details:", error.response?.data || error.message);
  alert(error.response?.data?.error || "Error placing order");
}
};

// Add this state for remove order
const [removeOrderId, setRemoveOrderId] = useState("");

// Add this function to handle order removal
const handleRemoveOrder = async (e) => {
  e.preventDefault();
  if (!removeOrderId) {
    alert("Please enter an Order ID");
    return;
  }

  try {
    const response = await axios.delete(`http://localhost:5014/removeOrder/${removeOrderId}`);
    if (response.data) {
      alert("Order removed successfully!");
      setRemoveOrderId(""); // Reset the input field
    }
  } catch (error) {
    console.error("Error removing order:", error);
    alert(error.response?.data?.error || "Error removing order");
  }
};

    
    return (
        <div>
            {/* Order Edit Section */}
            <section id="order-edit" className="order-edit-section">
                <div className="container">
                    <h2 className="section-title">Edit Order</h2>
                    <form onSubmit={updateOrder}>
                        <label>Order ID:</label>
                        <input
                            type="text"
                            name="order_id"
                            value={orderData.order_id}
                            onChange={(e) => setOrderData({ ...orderData, order_id: e.target.value })}
                            onBlur={fetchOrder}
                        />

                        <label>Customer Name:</label>
                        <input
                            type="text"
                            name="customer_name"
                            value={orderData.customer_name}
                            onChange={(e) => setOrderData({ ...orderData, customer_name: e.target.value })}
                        />

                        <label>Customer Contact No:</label>
                        <input
                            type="text"
                            name="contact_No"
                            value={orderData.contact_No}
                            onChange={(e) => setOrderData({ ...orderData, contact_No: e.target.value })}
                        />

                        <label>Plant Name:</label>
                        <select
  name="plant_name"
  value={orderData.plant_name} // Changed from placeOrderData to orderData
  onChange={(e) => setOrderData({ // Changed from setPlaceOrderData to setOrderData
    ...orderData,
    plant_name: e.target.value
  })}
  required
>
  <option value="">Select a plant</option>
  {plants.map((plant) => (
    <option 
      key={plant.id} 
      value={plant.name.toLowerCase().replace(/ /g, '_')}
    >
      {plant.name}
    </option>
  ))}
</select>
                        {/* <select
                            name="plant_name"
                            value={orderData.plant_name}
                            onChange={(e) => setOrderData({ ...orderData, plant_name: e.target.value })}
                        >
                            {plants.map((plant) => (
                                <option key={plant.id} value={plant.name.replace(" ", "_").toLowerCase()}>{plant.name}</option>
                            ))}
                        </select> */}
                        

                <label>Quantity:</label>
                        <input
                            type="number"
                            name="quantity"
                            value={orderData.quantity}
                            onChange={(e) => setOrderData({ ...orderData, quantity: e.target.value })}
                        />

                        <button type="submit" className="btn update">Update Order</button>
                    </form>
                </div>
            </section>

            {/* Place Order Section */}
            <section id="place-order" className="place-order-section">
  <div className="container">
    <h2 className="section-title">Place Order</h2>
    <form onSubmit={handlePlaceOrder}>
      <label>Customer Name:</label>
      <input
        type="text"
        name="customer_name"
        value={placeOrderData.customer_name}
        onChange={(e) => setPlaceOrderData({
          ...placeOrderData,
          customer_name: e.target.value
        })}
        required
      />
      
      <label>Customer Contact No:</label>
      <input
        type="text"
        name="contact_No"
        value={placeOrderData.contact_No}
        onChange={(e) => setPlaceOrderData({
          ...placeOrderData,
          contact_No: e.target.value
        })}
        required
      />
      
      <label>Customer Email:</label>
      <input
        type="email"
        name="customer_email"
        value={placeOrderData.customer_email}
        onChange={(e) => setPlaceOrderData({
          ...placeOrderData,
          customer_email: e.target.value
        })}
        required
      />
      
      <label>Plant Name:</label>
      <select
        name="plant_name"
        value={placeOrderData.plant_name}
        onChange={(e) => setPlaceOrderData({
          ...placeOrderData,
          plant_name: e.target.value
        })}
        required
      >
        <option value="">Select a plant</option>
        {plants.map((plant) => (
          <option 
            key={plant.id} 
            value={plant.name.toLowerCase().replace(/ /g, '_')}
            // value={plant.name.replace(" ", "_").toLowerCase()}
          >
            {plant.name}
          </option>
        ))}
      </select>
      
      <label>Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={placeOrderData.quantity}
        onChange={(e) => setPlaceOrderData({
          ...placeOrderData,
          quantity: e.target.value
        })}
        min="1"
        required
      />
      
      <button type="submit" className="btn place-order">
        Place Order
      </button>
    </form>
  </div>
</section>
           

            {/* Order Removal Section */}
            {/* <section id="order-removal" className="order-removal-section">
                <div className="container">
                    <h2 className="section-title">Remove Order</h2>
                    <form>
                        <label>Order ID:</label>
                        <input type="text" name="orderId" />
                        
                        <button className="btn remove-order">Remove Order</button>
                    </form>
                </div>
            </section> */}
            <section id="order-removal" className="order-removal-section">
  <div className="container">
    <h2 className="section-title">Remove Order</h2>
    <form onSubmit={handleRemoveOrder}>
      <label>Order ID:</label>
      <input
        type="text"
        name="orderId"
        value={removeOrderId}
        onChange={(e) => setRemoveOrderId(e.target.value)}
        required
      />
      <button type="submit" className="btn remove-order">
        Remove Order
      </button>
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
                                    <td>{plant.displayName}</td>
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
