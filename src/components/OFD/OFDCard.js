import './OFDCard.css'

function OFDCard({ provider }) {
	return (
		<article className='ofd-card'>
			<header className='ofd-card__header'>
				<h3 className='ofd-card__name'>{provider.name}</h3>
				{provider.recommended && (
					<span className='ofd-card__badge'>Рекомендуем</span>
				)}
			</header>

			{provider.bestFor && (
				<p className='ofd-card__bestfor'>{provider.bestFor}</p>
			)}

			<ul className='ofd-card__plans'>
				{provider.plans.map(plan => (
					<li key={plan.months}>
						<span>{plan.months} мес.</span>
						<span>{plan.price.toLocaleString('ru-RU')} ₽</span>
					</li>
				))}
			</ul>

			<button
				className='ofd-card__button'
				type='button'
				onClick={() => alert('Демо: здесь могла бы быть форма заказа кода')}
			>
				Купить код
			</button>
			<button
				className='ofd-card__link'
				type='button'
				onClick={() => alert('Демо: подробное описание оператора')}
			>
				Подробнее об операторе
			</button>
		</article>
	)
}

export default OFDCard
