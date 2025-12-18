import './App.css'
import About from './components/About/About'
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
			<About />
		</Layout>
	)
}

export default App
