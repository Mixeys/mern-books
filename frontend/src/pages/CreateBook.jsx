import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const CreateBook = () => {
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [publishYear, setPublishYear] = useState('')
	const [loading, setLoading] = useState(false)

	const handleCreateBook = () => {
		const data = {
			title,
			author,
			publishYear,
		}

		setLoading(true)
		axios
			.post('http://localhost:5555/books', data)
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
			<h1 className="text-3xl my-4">Create Book</h1>
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
					<button className="p-2 bg-sky-300 m-8" onClick={handleCreateBook}>
						Create Book
					</button>
				</div>
			)}
		</div>
	)
}

export default CreateBook
