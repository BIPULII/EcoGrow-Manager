 import express from 'express'; 
 import mysql from 'mysql';
 const app = express();
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

app.get('/',(req,res)=>{
    res.send('hello world');
})

 app.listen(5006, () => {
   console.log('Server is running on port 5006');
 });