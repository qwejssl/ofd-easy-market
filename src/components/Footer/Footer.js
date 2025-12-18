import './Footer.css'

function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='footer__inner'>
				<div className='footer__col'>
					<h4>OFDEasy Маркет</h4>
					<p>
						Онлайн‑витрина кодов активации ОФД. Помогаем предпринимателям
						выбирать операторов, сравнивать тарифы и подключать онлайн‑кассы без
						лишней бюрократии.
					</p>
				</div>

				<div className='footer__col'>
					<h5>Разделы сайта</h5>
					<ul>
						<li>
							<a href='/'>Главная</a>
						</li>
						<li>
							<a href='/operators'>Операторы ОФД</a>
						</li>
						<li>
							<a href='/about'>О сервисе</a>
						</li>
						<li>
							<a href='/contacts'>Поддержка</a>
						</li>
					</ul>
				</div>

				<div className='footer__col'>
					<h5>Документы</h5>
					<ul>
						<li>
							<a href='/privacy'>Политика конфиденциальности</a>
						</li>
						<li>
							<a href='/terms'>Пользовательское соглашение</a>
						</li>
						<li>
							<a href='/data-policy'>Обработка персональных данных</a>
						</li>
					</ul>
				</div>

				<div className='footer__col'>
					<h5>Контакты</h5>
					<p>Email: info@ofdeasy.ru</p>
					<p>Телефон: +7 (000) 000‑00‑00</p>
					<p>График: пн–пт, 10:00–19:00 (МСК)</p>
				</div>
			</div>

			<div className='footer__bottom'>
				<span>© {year} OFDEasy Маркет</span>
				<span>Коды ОФД на 12–36 месяцев у ведущих операторов</span>
			</div>
		</footer>
	)
}

export default Footer
