 import express from 'express'; 
 import mysql from 'mysql';
 import cors from 'cors';
 import bcrypt from 'bcrypt';

 const app = express();

  app.use(cors());
  app.use(express.json());
 const dbConfig={
    host:'berkp48rwddywbgi77ez-mysql.services.clever-cloud.com',//replace with your MySQL host
    user:'uaw4in7o93fyhrpa', //replace with your MySQL user
    password:'nI8TxYY2Afw3tiDkT8vn', //replace with your MySQL password
    database:'berkp48rwddywbgi77ez', //replace with your MySQL database
 };
 const connection = mysql.createConnection(dbConfig);

 connection.connect((err)=>{
  if(err){
    console.error('Error connecting to MySQL: ', err.message);
 }  
 else{
    console.log('Connected to MySQL database!');
 }
});
 app.post('/about',(req,res)=>{
  res.send('post');
})
//###########################
app.post('/Login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM User WHERE username = ?';
  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error fetching user data: ', err.message);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    const user = results[0];

    // Check password (if you're using bcrypt to hash passwords)
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords: ', err.message);
        return res.status(500).send('Server error');
      }

      if (isMatch) {
        // If login is successful, send a success response
        res.status(200).send({ success: true, message: 'Login successful' });
      } else {
        // If password is incorrect
        res.status(401).send({ success: false, message: 'Invalid credentials' });
      }
    });
  });
});
//###########################
app.get('/Plants',(req,res)=>{
  const query = 'SELECT * FROM Plants';
  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data: ', err.message);
          res.status(500).send('Server error');
      } else {
          res.json(results);
      }
  });
});
//*************************** */
app.post('/Users',(req,res)=>{
  const {username,password,email}=req.body;
  const query = `INSERT INTO Users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;
  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error inserting data: ', err.message);
          res.status(500).send('Server error');
      } else {
          res.status(201).send('User registered successfully');
      }
  });
});

//********************************** */
app.get('/',(req,res)=>{
    res.send('hello world');
})

 app.listen(5008, () => {
   console.log('Server is running on port 5008');
 });