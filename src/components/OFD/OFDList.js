import { useState } from 'react'
import ofdProviders from '../../data/ofdProviders'
import OFDCard from './OFDCard'
import './OFDList.css'
import OFDModal from './OFDModal'

function OFDList() {
	const [activeMonths, setActiveMonths] = useState('all')
	const [expanded, setExpanded] = useState(false)
	const [selectedProvider, setSelectedProvider] = useState(null)

	const filteredProviders = ofdProviders
		.map(provider => ({
			...provider,
			plans:
				activeMonths === 'all'
					? provider.plans
					: provider.plans.filter(
							plan => String(plan.months) === String(activeMonths)
					  ),
		}))
		// если нет тарифов под выбранный срок — скрываем оператора
		.filter(provider =>
			activeMonths === 'all' ? true : provider.plans.length > 0
		)

	const initialCount = 3
	const showToggle = filteredProviders.length > initialCount

	const visibleProviders = expanded
		? filteredProviders
		: filteredProviders.slice(0, initialCount)

	return (
		<section className='ofd-list' id='operators'>
			<h2>Выберите оператора ОФД</h2>
			<p className='ofd-list__subtitle'>
				Сравните тарифы по сроку действия и выберите подходящий вариант.
			</p>

			<div className='ofd-list__filters'>
				<button
					type='button'
					className={activeMonths === 'all' ? 'active' : ''}
					onClick={() => setActiveMonths('all')}
				>
					Все сроки
				</button>
				<button
					type='button'
					className={activeMonths === '12' ? 'active' : ''}
					onClick={() => setActiveMonths('12')}
				>
					12 мес.
				</button>
				<button
					type='button'
					className={activeMonths === '15' ? 'active' : ''}
					onClick={() => setActiveMonths('15')}
				>
					15 мес.
				</button>
				<button
					type='button'
					className={activeMonths === '36' ? 'active' : ''}
					onClick={() => setActiveMonths('36')}
				>
					36 мес.
				</button>
			</div>

			<div
				className={
					expanded
						? 'ofd-list__grid-wrapper ofd-list__grid-wrapper--expanded'
						: 'ofd-list__grid-wrapper'
				}
			>
				<div className='ofd-list__grid'>
					{visibleProviders.map(provider => (
						<OFDCard
							key={provider.id}
							provider={provider}
							onShowDetails={() => setSelectedProvider(provider)}
						/>
					))}
				</div>
			</div>

			{showToggle && (
				<div className='ofd-list__toggle'>
					<button type='button' onClick={() => setExpanded(prev => !prev)}>
						{expanded ? 'Свернуть список' : 'Показать всех операторов'}
					</button>
				</div>
			)}

			<OFDModal
				provider={selectedProvider}
				onClose={() => setSelectedProvider(null)}
			/>
		</section>
	)
}

export default OFDList
