import './Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>OFDEasy Маркет</div>
			<nav className='header__nav'>
				<a href='#home'>Главная</a>
				<a href='#operators'>Операторы</a>
				<a href='#about'>О нас</a>
				<a href='#contacts'>Контакты</a>
			</nav>
		</header>
	)
}

export default Header
