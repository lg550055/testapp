const app = require('express')()
const cors = require('cors')

app.use(cors())

app.use('/login', (req, res) => {
  res.send({ token: 'test5'});
})

app.listen(8080, ()=> console.log('Listening on 8080'));
