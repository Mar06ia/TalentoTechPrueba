const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup 
userSchema.statics.signup = async function(email, password) {

  // validation
  if (!email || !password) {
    throw Error('Campos obligatorios')
  }
  if (!validator.isEmail(email)) {
    throw Error('Correo invalido')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Contraseña insegura')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Correo ya esta en uso')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('Todos los campos son obligatorios')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Correo Incorrecto')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Contraseña Incorrecta')
  }
  return user
}

module.exports = mongoose.model('User', userSchema)