import ofdProviders from '../../data/ofdProviders'
import OFDCard from './OFDCard'
import './OFDList.css'

function OFDList() {
	return (
		<section className='ofd-list' id='operators'>
			<h2>Выберите оператора ОФД</h2>
			<p className='ofd-list__subtitle'>
				Сравните тарифы по сроку действия и выберите подходящий вариант.
			</p>
			<div className='ofd-list__grid'>
				{ofdProviders.map(provider => (
					<OFDCard key={provider.id} provider={provider} />
				))}
			</div>
		</section>
	)
}

export default OFDList
