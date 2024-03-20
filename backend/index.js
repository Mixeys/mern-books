import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { PORT, mongoDBURL } from './config.js'
import bookRouter from './routes/bookRoute.js'

const app = express()

app.use(express.json())
// app.use(cors()) - allow all origins with default of cors(*)
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
	})
)
app.use('/books', bookRouter)

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log('Connected to MongoDB')
		app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
	})
	.catch((err) => console.log(err))
