const express = require('express')
const app = express()

app.get('/employees', (req, res) => {
	res.json(employees)
})
.get('/employees/:id', (req, res) => {
	const employee = findOne(req.params.id)
	res.json(employee)
})

module.exports = app

employees = [
	{id:1, name: 'Anders'},
	{id:2, name: 'Anna'},
	{id:3, name: 'Knut'},
	{id:4, name: 'Stina'}
]

const findOne = id => {
	let index = id -1
	return employees[index]
}
