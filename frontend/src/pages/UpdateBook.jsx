import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const UpdateBook = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [publishYear, setPublishYear] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		axios
			.get(`http://localhost:5555/books/${id}`)
			.then(({ data }) => {
				setTitle(data.title)
				setAuthor(data.author)
				setPublishYear(data.publishYear)
			})
			.catch((err) => console.log('err: ', err))
			.finally(() => setLoading(false))
	}, [id])

	const handleUpdateBook = () => {
		const data = {
			title,
			author,
			publishYear,
		}

		setLoading(true)
		axios
			.put(`http://localhost:5555/books/${id}`, data)
			.then(() => {
				setLoading(false)
				navigate('/')
			})
			.catch((err) => {
				setLoading(false)
				console.log('err: ', err)
			})
	}

	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Update Book</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
					<div className="my-4">
						<label className="text-xl mr-4 text-gray-500">Title</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>
					</div>
					<div className="my-4">
						<label className="text-xl mr-4 text-gray-500">Author</label>
						<input
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>
					</div>
					<div className="my-4">
						<label className="text-xl mr-4 text-gray-500">Publish Year</label>
						<input
							value={publishYear}
							onChange={(e) => setPublishYear(e.target.value)}
							className="border-2 border-gray-500 px-4 py-2 w-full"
						/>
					</div>
					<button className="p-2 bg-sky-300 m-8" onClick={handleUpdateBook}>
						Update Book
					</button>
				</div>
			)}
		</div>
	)
}

export default UpdateBook
