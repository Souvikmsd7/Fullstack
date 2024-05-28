const express = require('express');
// import express from 'express';
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/finds', (req, res) => {
  const emp =[
    {
      id : 1,
      name : "Debu",
      expertise : "Frontend"

    },
    {
      id : 2,
      name : "Raju",
      expertise : "CTO"

    },
    {
      id : 3,
      name : "Shreya",
      expertise : "DB"

    },
    {
      id : 4,
      name : "Srija",
      expertise : "Laravel"

    },
    {
      id : 1,
      name : "Amiyo",
      expertise : "Mern"

    }
  ]
  res.send(emp)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})