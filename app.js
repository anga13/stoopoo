const express = require('express')
const app = express()
const db = require('./db')

app.get('/employees', (req, res) => {
  db.all().then(employees => {
    res.json(employees)
  })
})
.get('/employees/:id', (req, res) => {
  db.findOne(req.params.id).then(employee => {
    res.json(employee)
  })
})

module.exports = app
