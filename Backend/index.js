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

// app.get("/lr_login",(req,res)=>{
//   const q="SELECT * FROM lr_login"
//   db.query(q,(err,data)=>{
//     if(err){
//       return res.json(err);
//     }else{
//       res.json(data); 
//     }
//   })
// });

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  // Check if the user exists
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

    // Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return res.json({ success: true, message: "Login successful!" });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  });
});

// **Register a New User**
app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL Query
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

app.listen(5014, () => {
  console.log('Server is running on port 5014');
});


// import express from 'express'; 
// import mysql from 'mysql';
// import cors from 'cors';
// import bcrypt from 'bcrypt';

// const app = express();

//  app.use(cors());
//  app.use(express.json());
// //connect to MySQL database
//  const dbConfig={
//    host:'berkp48rwddywbgi77ez-mysql.services.clever-cloud.com',//replace with your MySQL host
//    user:'uaw4in7o93fyhrpa', //replace with your MySQL user
//    password:'nI8TxYY2Afw3tiDkT8vn', //replace with your MySQL password
//    database:'berkp48rwddywbgi77ez', //replace with your MySQL database
// };
// const connection = mysql.createConnection(dbConfig);

// connection.connect((err)=>{
//  if(err){
//    console.error('Error connecting to MySQL: ', err.message);
// }  
// else{
//    console.log('Connected to MySQL database!');
// }
// });
// app.post('/about',(req,res)=>{
//  res.send('post');
// })

// app.get('/Plants',(req,res)=>{
//  const query = 'SELECT * FROM Plants';
//  connection.query(query, (err, results) => {
//      if (err) {
//          console.error('Error fetching data: ', err.message);
//          res.status(500).send('Server error');
//      } else {
//          res.json(results);
//      }
//  });
// });

// app.post('/Users', async (req, res) => {
//   const { username, password, email } = req.body;

//   if (!username || !password || !email) {
//     return res.status(400).send('All fields are required');
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const query = 'INSERT INTO Users (username, password, email) VALUES (?, ?, ?)';
//     connection.query(query, [username, hashedPassword, email], (err, results) => {
//       if (err) {
//         console.error('Error inserting user: ', err.message);
//         return res.status(500).send('Server error');
//       }
//       res.status(201).send('User registered successfully!');
//     });
//   } catch (error) {
//     console.error('Error registering user: ', error.message);
//     res.status(500).send('Server error');
//   }
// });

// app.get('/',(req,res)=>{
//    res.send('hello world');
// })

// app.listen(5014, () => {
//   console.log('Server is running on port 5014');
// });
