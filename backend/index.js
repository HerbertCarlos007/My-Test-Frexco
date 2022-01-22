const express = require('express')
const app = express()
const port = 3333
const api = require('./fruitService');

const cors = require ('cors')

app.use(cors({
    origin:'http://localhost:3000'    
}))

function generateRandomPrice() {
  let random = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  console.log('numero aleatorio',random)
  return  String(random).replace('.' , ',')
}

app.get('/pegarFrutas', async(req, res) => {
  const response = await api.get("/fruit/all")
  const fruitsWithPrice = response.data.map(fruit => ( {...fruit, price: generateRandomPrice()}) )
 console.log(fruitsWithPrice)
  res.json(fruitsWithPrice)
  })
  
app.listen(port, () => console.log(`Servidor rodando na porta:${port}`))