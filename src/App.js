import './App.css'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import OFDList from './components/OFD/OFDList'
import Stats from './components/Stats/Stats'

function App() {
	return (
		<Layout>
			<Hero />
			<OFDList />
			<Stats />
		</Layout>
	)
}

export default App
