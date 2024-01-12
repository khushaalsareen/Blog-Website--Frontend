const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const blogs = require('./api/blogsData.json')
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Blog server is running!")
});

app.get('/api/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/api/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})