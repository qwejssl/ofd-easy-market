import './Hero.css'

function Hero() {
	return (
		<section className='hero'>
			<div className='hero__content'>
				<h1>Коды ОФД со скидками до 70% для онлайн‑касс</h1>
				<p>
					OFDEasy Маркет собирает предложения ведущих операторов фискальных
					данных в одном месте: 8 проверенных ОФД, коды от 12 до 36 месяцев и
					быстрая отправка на email.
				</p>
				<ul className='hero__bullets'>
					<li>
						Все цены и сроки на одной странице, без регистрации и звонков.
					</li>
					<li>
						Подходит для магазинов, кафе, салонов услуг и интернет‑торговли.
					</li>
					<li>
						Чёткие инструкции по активации кода и переносу от старого ОФД.
					</li>
				</ul>
				<div className='hero__actions'>
					<a href='/operators' className='hero__primary'>
						Подобрать оператора
					</a>
					<a href='/about' className='hero__secondary'>
						Как это работает
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
