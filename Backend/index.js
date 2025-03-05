import express from 'express';
import mysql from 'mysql2';
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5014;

app.use(cors());
app.use(bodyParser.json());

const db= mysql.createConnection({
  host:"localhost",
  user:"root",
  password:'Baplu2002**',
  database:"rootify"
});
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.get("/",(req,res)=>{
  res.json("Hello world");
});


// **Register a New User**
app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const q = "INSERT INTO lr_login (username, password, email) VALUES (?, ?, ?)";
    const values = [username, hashedPassword, email];

    db.query(q, values, (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "User registered successfully!" });
    });
  } catch (error) {
    res.status(500).json({ error: "Error hashing password" });
  }
});

// Modify the login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const query = "SELECT * FROM lr_login WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error("Database query failed:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Include user data in response (excluding sensitive information)
      return res.json({
        success: true,
        message: "Login successful!",
        user: {
          username: user.username,
          email: user.email
        }
      });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  });
});

//API to fetch order details
app.get("/getOrder/:order_id", (req, res) => {
  const orderId = req.params.order_id;
  const query = "SELECT * FROM order_data_table WHERE order_id = ?";
  
  db.query(query, [orderId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(results[0]); // Send the order details
  });
});
//Add API to Update Order
app.put("/updateOrder", (req, res) => {
  const { order_id, customer_name, contact_No, plant_name, quantity } = req.body;

  if (!order_id || !customer_name || !contact_No || !plant_name || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Convert plant name to match DB column naming convention
  const columnName = `${plant_name.replace(" ", "_").toLowerCase()}_db_qty`;

  // Ensure column name is safely inserted into the query
  const query = `
    UPDATE order_data_table 
    SET customer_name = ?, contact_No = ?, ?? = ?
    WHERE order_id = ?
  `;

  db.query(query, [customer_name, contact_No, columnName, quantity, order_id], (err, result) => {
    if (err) {
      console.error("Database update error:", err.sqlMessage);
      return res.status(500).json({ error: "Database error", details: err.sqlMessage });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found or no changes made" });
    }

    res.json({ message: "Order updated successfully!" });
  });
});

// Add this after your existing endpoints

app.post("/placeOrder", (req, res) => {
  const { customer_name, contact_No, customer_email, plant_name, quantity } = req.body;

  if (!customer_name || !contact_No || !customer_email || !plant_name || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }

  
  // Create column names string for all plant columns
  const plantQuantities = {
    snake_plant_db_qty: 0,
    jade_plant_db_qty: 0,
    fiddle_leaf_plant_db_qty: 0,
    piece_lilly_plant_db_qty: 0,
    rubber_plant_db_qty: 0,
    spider_plant_db_qty: 0,
    pothos_plant_db_qty: 0,
    zz_plant_db_qty: 0,
    chienese_evergreen_plant_db_qty: 0,
    monstera_plant_db_qty: 0
  };
  const columnName = `${plant_name}_db_qty`;
  plantQuantities[columnName] = quantity;


  // Create the column names part of the query
  //const columnNames = ['customer_name', 'contact_No', 'order_date', ...plantColumns, 'email'].join(', ');
  const query = `
  INSERT INTO order_data_table (
    customer_name,
    contact_No,
    order_date,
    snake_plant_db_qty,
    jade_plant_db_qty,
    fiddle_leaf_plant_db_qty,
    piece_lilly_plant_db_qty,
    rubber_plant_db_qty,
    spider_plant_db_qty,
    pothos_plant_db_qty,
    zz_plant_db_qty,
    chienese_evergreen_plant_db_qty,
    monstera_plant_db_qty,
    customer_email
  ) VALUES (?, ?, CURDATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
  
const values = [
  customer_name,
  contact_No,
  plantQuantities.snake_plant_db_qty,
  plantQuantities.jade_plant_db_qty,
  plantQuantities.fiddle_leaf_plant_db_qty,
  plantQuantities.piece_lilly_plant_db_qty,
  plantQuantities.rubber_plant_db_qty,
  plantQuantities.spider_plant_db_qty,
  plantQuantities.pothos_plant_db_qty,
  plantQuantities.zz_plant_db_qty,
  plantQuantities.chienese_evergreen_plant_db_qty,
  plantQuantities.monstera_plant_db_qty,
  customer_email
];
  

  // Log the query and values for debugging
  console.log('Plant name:', plant_name);
  console.log('Column name:', columnName);
  console.log('Query:', query);
  console.log('Values:', values);


  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Database insertion error:", err);
      return res.status(500).json({ 
        error: "Database error", 
        details: err.message 
      });
    }

    res.status(201).json({ 
      message: "Order placed successfully!", 
      orderId: result.insertId 
    });
  });
});

// Add this after your existing endpoints
app.delete("/removeOrder/:order_id", (req, res) => {
  const orderId = req.params.order_id;

  if (!orderId) {
    return res.status(400).json({ error: "Order ID is required" });
  }

  const query = "DELETE FROM order_data_table WHERE order_id = ?";
  
  db.query(query, [orderId], (err, result) => {
    if (err) {
      console.error("Database deletion error:", err);
      return res.status(500).json({ 
        error: "Database error", 
        details: err.message 
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ 
      message: "Order removed successfully!", 
      orderId: orderId 
    });
  });
});

app.listen(5014, () => {
  console.log('Server is running on port 5014');
});


