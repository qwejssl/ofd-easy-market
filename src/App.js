import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import OperatorsPage from './pages/OperatorsPage'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/operators' element={<OperatorsPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contacts' element={<ContactsPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
