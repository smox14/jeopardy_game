const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  User
    .findByEmail(email)
    .then(user => {
      if (user) {
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (isValidPassword) {
          
          // log the user in
          req.session.userId = user.id
          // send back user's name to them
          return res.status(200).json({ userName: user.name , userId: user.id})
        } 
      }   
        
        // send back a message to inform the user that they provided the wrong email or password
        return res.status(409).json({ message: 'Invalid email or password' })
      
    })
})

router.delete('/', (req, res) => {
  req.session.userId = null 
  return res.status(200)
})

module.exports = router