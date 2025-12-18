import './OFDModal.css'

function OFDModal({ provider, onClose }) {
	if (!provider) return null

	return (
		<div className='ofd-modal__backdrop' onClick={onClose}>
			<div className='ofd-modal' onClick={e => e.stopPropagation()}>
				<header className='ofd-modal__header'>
					<h3>{provider.name}</h3>
					<button type='button' className='ofd-modal__close' onClick={onClose}>
						×
					</button>
				</header>

				{provider.bestFor && (
					<p className='ofd-modal__tag'>
						Для кого: <span>{provider.bestFor}</span>
					</p>
				)}

				{provider.description && (
					<p className='ofd-modal__text'>{provider.description}</p>
				)}

				<h4>Доступные тарифы</h4>
				<ul className='ofd-modal__plans'>
					{provider.plans.map(plan => (
						<li key={plan.months}>
							<span>{plan.months} мес.</span>
							<span>{plan.price.toLocaleString('ru-RU')} ₽</span>
						</li>
					))}
				</ul>

				<h4>Способы оплаты </h4>
				<p className='ofd-modal__note'>
					Доступны банковские карты основных платежных систем, оплата через
					интернет‑банк и по счету для юридических лиц. При выборе оплаты по
					счету реквизиты и счет на оплату будут отправлены вам на электронную
					почту.
				</p>
				<h4>Как происходит выдача кода</h4>
				<p className='ofd-modal__note'>
					После успешной оплаты код активации автоматически формируется в
					системе и отправляется на указанный при заказе e‑mail. Письмо содержит
					сам код, срок его действия и пошаговую инструкцию по активации на
					кассе или в личном кабинете выбранного ОФД.
				</p>

				<div className='ofd-modal__actions'>
					<button
						type='button'
						className='ofd-modal__primary'
						onClick={onClose}
					>
						Понятно
					</button>
				</div>
			</div>
		</div>
	)
}

export default OFDModal
