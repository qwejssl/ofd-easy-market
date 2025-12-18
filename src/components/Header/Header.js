import './Header.css'

function scrollToId(id) {
	const el = document.getElementById(id)
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' })
	}
}

function Header() {
	return (
		<header className='header'>
			<div className='header__logo' onClick={() => scrollToId('home')}>
				OFDEasy Маркет
			</div>
			<nav className='header__nav'>
				<button type='button' onClick={() => scrollToId('home')}>
					Главная
				</button>
				<button type='button' onClick={() => scrollToId('operators')}>
					Операторы
				</button>
				<button type='button' onClick={() => scrollToId('about')}>
					О нас
				</button>
				<button type='button' onClick={() => scrollToId('contacts')}>
					Контакты
				</button>
			</nav>
		</header>
	)
}

export default Header
