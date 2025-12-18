import { useState } from 'react'
import ofdProviders from '../../data/ofdProviders'
import OFDCard from './OFDCard'
import OFDModal from './OFDModal'
import './OFDSlider.css'

function OFDSlider() {
	const [index, setIndex] = useState(0)
	const [selectedProvider, setSelectedProvider] = useState(null)

	const visibleCount = 3
	const slidesCount = ofdProviders.length - visibleCount + 1 // сколько реальных шагов

	const handlePrev = () => {
		setIndex(prev => Math.max(prev - 1, 0))
	}

	const handleNext = () => {
		setIndex(prev => Math.min(prev + 1, slidesCount - 1))
	}

	return (
		<section className='ofd-slider' id='operators'>
			<div className='ofd-slider__header'>
				<h2>8 проверенных ОФД, коды от 12 до 36 месяцев</h2>
				<p>
					Пролистайте операторов и сравните тарифы: каждый ОФД предлагает разные
					условия для розницы, HoReCa и интернет‑торговли.
				</p>
			</div>

			<div className='ofd-slider__viewport'>
				<button
					type='button'
					className='ofd-slider__arrow ofd-slider__arrow--left'
					onClick={handlePrev}
					aria-label='Предыдущие операторы'
					disabled={index === 0}
				>
					‹
				</button>

				<div className='ofd-slider__window'>
					<div
						className='ofd-slider__track'
						style={{
							transform: `translateX(-${index * (100 / visibleCount)}%)`,
						}}
					>
						{ofdProviders.map(provider => (
							<div key={provider.id} className='ofd-slider__slide'>
								<OFDCard
									provider={provider}
									onShowDetails={() => setSelectedProvider(provider)}
								/>
							</div>
						))}
					</div>
				</div>

				<button
					type='button'
					className='ofd-slider__arrow ofd-slider__arrow--right'
					onClick={handleNext}
					aria-label='Следующие операторы'
					disabled={index === slidesCount - 1}
				>
					›
				</button>
			</div>

			<div className='ofd-slider__dots'>
				{Array.from({ length: slidesCount }).map((_, i) => (
					<button
						key={i}
						type='button'
						className={
							i === index
								? 'ofd-slider__dot ofd-slider__dot--active'
								: 'ofd-slider__dot'
						}
						onClick={() => setIndex(i)}
						aria-label={`Перейти к шагу ${i + 1}`}
					/>
				))}
			</div>

			<OFDModal
				provider={selectedProvider}
				onClose={() => setSelectedProvider(null)}
			/>
		</section>
	)
}

export default OFDSlider
