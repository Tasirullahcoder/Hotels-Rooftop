const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


async function main() {
  await mongoose.connect('mongodb+srv://rooftop123dgr:r8iDNUuIsR3qrFqt@hotel-rooptop-cluster.kxw2q.mongodb.net/hotels-rooftop?retryWrites=true&w=majority&appName=hotel-rooptop-cluster');
  app.get('/', (req, res) => {
    res.send('Hello World developer!')
  })
 
}
main()
.then(console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})