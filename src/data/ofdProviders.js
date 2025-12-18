const ofdProviders = [
	{
		id: 1,
		name: 'Платформа ОФД',
		bestFor: 'Небольшие магазины и кафе с одной-двумя кассами',
		recommended: true,
		plans: [
			{ months: 12, price: 1290 },
			{ months: 15, price: 1490 },
			{ months: 36, price: 2990 },
		],
	},
	{
		id: 2,
		name: 'ОФД.ру',
		bestFor: 'Сети точек и интернет‑магазины с большим трафиком',
		recommended: true,
		plans: [
			{ months: 12, price: 1490 },
			{ months: 15, price: 1990 },
			{ months: 36, price: 3990 },
		],
	},
	{
		id: 3,
		name: 'Первый ОФД',
		bestFor: 'Универсальный вариант для малого и среднего бизнеса',
		recommended: false,
		plans: [
			{ months: 12, price: 1290 },
			{ months: 15, price: 1490 },
			{ months: 36, price: 2990 },
		],
	},
]

export default ofdProviders
