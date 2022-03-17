const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .findByEmail(email)
    .then(user => {
      if(!user){
        User
          .create(name, email, passwordDigest)    
          .then(user => {
            return res.json(user.name)
          })
          
      } else {
        return res.status(409).json({message: "This e-mail is taken. Try another."})
      }

    })
    
    
    
    
})

module.exports = router