import './Stats.css'

function Stats() {
	return (
		<section className='stats'>
			<div className='stats__item'>
				<div className='stats__number'>8</div>
				<div className='stats__label'>операторов ОФД</div>
			</div>
			<div className='stats__item'>
				<div className='stats__number'>6085+</div>
				<div className='stats__label'>постоянных клиентов</div>
			</div>
			<div className='stats__item'>
				<div className='stats__number'>2356</div>
				<div className='stats__label'>кодов на остатке</div>
			</div>
		</section>
	)
}

export default Stats
