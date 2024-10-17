//environment variable
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//create express
const app = express()

// middleware 
app.use(express.json())
//Función que se ejecuta previo a la rutas definidas
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// rutas-routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //Escuchar petición
    app.listen(process.env.PORT, () => {
      console.log('Conectada en el puerto:', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })