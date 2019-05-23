const express = require('express')
const app = express()

app.get('/employees', () => {
	res.status(200)
})

module.exports = app

