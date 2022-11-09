const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000

require('dotenv').config()
app.use(cors())
app.use(express.json())


app.get('/',(req, res)=>{
    res.send('Ginius Car Server is Running')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ip0tsyu.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port ,()=>{
    console.log('Ginius Car Server Is running on ',port);
})
