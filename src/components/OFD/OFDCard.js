import './OFDCard.css'

function OFDCard({ provider }) {
	return (
		<article className='ofd-card'>
			<h3 className='ofd-card__name'>{provider.name}</h3>
			<ul className='ofd-card__plans'>
				{provider.plans.map(plan => (
					<li key={plan.months}>
						<span>{plan.months} мес.</span>
						<span>{plan.price} ₽</span>
					</li>
				))}
			</ul>
			<button className='ofd-card__button'>Купить код</button>
		</article>
	)
}

export default OFDCard
