const express = require('express')
const app = express()
const port = 3333
const api = require('./fruitService');

const cors = require ('cors')

app.use(cors({
    origin:'http://localhost:3000'    
}))

app.get('/pegarFrutas', async(req, res) => {
  const response = await api.get("/fruit/all")
  console.log(response.data)
  res.json(response.data)
  })
  
app.listen(port, () => console.log(`Servidor rodando na porta:${port}`))