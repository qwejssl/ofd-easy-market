import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
	const location = useLocation()

	return (
		<header className='header'>
			<div className='header__logo'>
				<Link to='/'>OFDEasy Маркет</Link>
			</div>
			<nav className='header__nav'>
				<Link className={location.pathname === '/' ? 'active' : ''} to='/'>
					Главная
				</Link>
				<Link
					className={location.pathname === '/operators' ? 'active' : ''}
					to='/operators'
				>
					Операторы
				</Link>
				<Link
					className={location.pathname === '/about' ? 'active' : ''}
					to='/about'
				>
					О нас
				</Link>
				<Link
					className={location.pathname === '/contacts' ? 'active' : ''}
					to='/contacts'
				>
					Контакты
				</Link>
			</nav>
		</header>
	)
}

export default Header
