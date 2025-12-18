import './Hero.css'

function Hero() {
	return (
		<section className='hero' id='home'>
			<div className='hero__content'>
				<h1>Коды ОФД со скидками до 70%</h1>
				<p>
					OFDEasy Маркет помогает быстро подобрать оператора фискальных данных и
					срок подключения под ваш бизнес.
				</p>
				<div className='hero__actions'>
					<a href='#operators' className='hero__primary'>
						Подобрать оператора
					</a>
					<a href='#about' className='hero__secondary'>
						Узнать больше
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
