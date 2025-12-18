import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import DataPolicyPage from './pages/DataPolicyPage'
import HomePage from './pages/HomePage'
import OperatorsPage from './pages/OperatorsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/operators' element={<OperatorsPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contacts' element={<ContactsPage />} />
					<Route path='/privacy' element={<PrivacyPage />} />
					<Route path='/terms' element={<TermsPage />} />
					<Route path='/data-policy' element={<DataPolicyPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
