const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // using bcrypt to create password digest
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .create(name, email, passwordDigest)
    .then(userName => res.json(userName))
})

module.exports = router