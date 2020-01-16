const express = require('express')
const mongoose = require ('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://root:geo2020dev@geodev-m3n2b.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true  
})
app.use(cors('origin: http://localhost:3000'))
app.use(express.json()) // Express passa a entender requisições com formato json.
app.use(routes)

// GET => quando buscamos alguma informação
// POST => quando criamos alguma informação
// PUT => quando alteramos alguma informação
// DELETE => quando deletamos alguma informação

// Query Params: é acessado através de request.query e são utilizados para Filtros, Ordenação, Paginação...
// Routes Params: é acessado através de request.param e é utilizado para identificar um recurso na alteração ou remoção
// Body: é acessado pelo request.body e é utilziado para criação ou atelração de registros

app.listen(3333)
