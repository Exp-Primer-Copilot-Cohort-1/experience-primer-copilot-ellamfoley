// Create web server
// 1. Require Express
// 2. Create an instance of Express
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Create a route for DELETE /comments/:id
// 6. Listen on port 3000

// 1. Require Express
const express = require('express')
const app = express()
const port = 3000

// 2. Create an instance of Express
// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments')
})

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments')
})

// 5. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id')
})

// 6. Listen on port 3000
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})