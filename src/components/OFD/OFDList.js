import { useState } from 'react'
import ofdProviders from '../../data/ofdProviders'
import OFDCard from './OFDCard'
import './OFDList.css'

function OFDList() {
	const [activeMonths, setActiveMonths] = useState('all')

	const filteredProviders = ofdProviders.map(provider => ({
		...provider,
		plans:
			activeMonths === 'all'
				? provider.plans
				: provider.plans.filter(
						plan => String(plan.months) === String(activeMonths)
				  ),
	}))

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

			<div className='ofd-list__grid'>
				{filteredProviders.map(provider => (
					<OFDCard key={provider.id} provider={provider} />
				))}
			</div>
		</section>
	)
}

export default OFDList
