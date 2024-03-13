import { Redis } from 'ioredis'

const client = new Redis(
	'rediss://:p5244a7dc69a2cef90ef037e8623936b11ba0c1e73d302a3336001d3855e10a43@ec2-23-20-127-254.compute-1.amazonaws.com:29520',
	{
		tls: {
			rejectUnauthorized: false
		}
	}
)

export const test = () => {
	debugger
	async function createRental(rentalId, rentalData) {
		try {
			await client.hmset(`rental:${rentalId}`, rentalData)
			console.log('	Rental created successfully.')
		} catch (error) {
			console.error('Error creating rental:', error)
		}
	}

	// Example data for a rental
	const rentalId = 1
	const rentalData = {
		customerId: 123,
		startDate: '2024-03-12',
		endDate: '2024-03-19',
		totalPrice: 500
	}

	// Call the function to create a rental
	createRental(rentalId, rentalData)
}

export default {
	redis: client
}
