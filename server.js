const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(cors());
// use express.json() to access req.body...
app.use(express.json())  

async function main() {
  const uri = 'mongodb+srv://pologonz:hardtoguess@main.mks0e.mongodb.net/gh?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    await client.connect();

    const coll = client.db('gh').collection('users');

    // coll.insertOne({name:'u3'}, email:'s@m.e'})
    // coll.deleteOne({name:'u3'})
    coll.updateOne({name:'u3'}, {$set: {zip: 71101}})
    const cursor = coll.find()
    const r = await cursor.toArray();

    r.forEach(e => {
      console.log(e)
    });

  } catch(e) {
    console.log(e);
  } finally {
    client.close();
  }
}

app.post('/login', (req, res) => {
  // query DB to confirm user exists and user email is ok
  req.body ? console.log('y',req.body) : console.log('n');
  res.send({ token: 'test5'});
})

app.post('/signup', (req, res) => {
  // create new user in DB
})

// app.listen(8080, ()=> console.log('Listening on 8080'));

main();
