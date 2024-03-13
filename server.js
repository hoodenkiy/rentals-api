// server.js
import { test } from './db/redis.js'
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
// Dummy rentals data
const rentals = [
	{
		id: 1,
		title: 'House',
		description: 'Beautiful house for rent',
		price: 1000
	},
	{
		id: 2,
		title: 'Apartment',
		description: 'Cozy apartment for rent',
		price: 800
	},
	{ id: 3, title: 'Condo', description: 'Luxury condo for rent', price: 1500 }
]

// Middleware to parse JSON bodies
app.use(express.json())

// Route to get all rentals
app.get('/rentals', (req, res) => {
	res.json(rentals)
})

// Route to get a single rental by ID
app.get('/rentals/:id', (req, res) => {
	console.log(33)
	debugger
	test()
	const id = parseInt(req.params.id)
	const rental = rentals.find(rental => rental.id === id)
	if (rental) {
		res.json(rental)
	} else {
		res.status(404).json({ message: 'Rental not found' })
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
