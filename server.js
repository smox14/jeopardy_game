//  a back-end web framework for building web app in JS
const express = require('express')

// access app Object
const app = express()
const port = 300 

//  start the web server
app.listen(port, 
  () => console.log(`listening on port ${port}`)
)
