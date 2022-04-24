const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {MongoClient} = require('mongodb');

const app = express();
app.use(cors());
// express.json() allows access req.body...
app.use(express.json())  

// pending: use cache to avoid multiple connections
async function dbConn() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    await client.connect();
    return client.db('gh').collection('users');

  } catch(e) {
    console.log(e);
  }
  // finally {
  //   client.close();
  // }
}

// const adduser = (coll, obj) => {
//   coll.insertOne(obj)
// }
// const getcred = (coll, obj) => {
//   coll.findOne(obj).then(r => console.log(r.email))
// }
// const updateuser = (coll, filter, update) => {
//   coll.updateOne(filter, update)
// }
// const deluser = (coll, obj) => {
//   coll.deleteOne(obj)
// }

// let myobj = {name:'u3'};

async function coll () {
  const collection = await dbConn();
  const users = await collection.find().toArray();
  console.log(users)
}
coll()

app.post('/login', (req, res) => {
  // query DB to confirm user exists and user email is ok
  req.body ? console.log('y',req.body) : console.log('n');
  res.send({ token: 'test5'});
})

app.post('/signup', (req, res) => {
  // create new user in DB
})

// app.listen(8080, ()=> console.log('Listening on 8080'));
