import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Book from './pages/Book'
import Books from './pages/Books'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import UpdateBook from './pages/UpdateBook'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Books />} />
			<Route path="/books/:id" element={<Book />} />
			<Route path="/books/create" element={<CreateBook />} />
			<Route path="/books/delete/:id" element={<DeleteBook />} />
			<Route path="/books/update/:id" element={<UpdateBook />} />
		</Routes>
	)
}

export default App
