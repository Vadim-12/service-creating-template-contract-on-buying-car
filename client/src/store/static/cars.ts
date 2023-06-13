import { Car } from "@/types/car";

export const cars: Car[] = [
	{
		id: 1,
		brand: 'Nissan',
		model: 'Qashqai',
		year_start: 2006,
		year_end: 2013,
		img_name: 'nissan_qashqai.png',
		is_new: true,
		modifications: [
			{
				id: 1,
				engine: 'diesel',
				price_min: 1.4,
				price_max: 1.8,
				capacity: 1.3,
				power_min: 130,
				WD: 'FWD'
			},
			{
				id: 2,
				engine: 'petrol',
				price_min: 1.5,
				price_max: 1.9,
				capacity: 0.9,
				power_min: 130,
				WD: '4WD'
			},
		]
	},
	{
		id: 2,
		brand: 'Nissan',
		model: 'Leaf',
		year_start: 2010,
		img_name: 'nissan_leaf.png',
		is_new: true,
		modifications: [
			{
				id: 1,
				engine: 'electro',
				price_min: 0.4,
				price_max: 1.4,
				reserve_power_min: 40,
				reserve_power_max: 150,
				power_min: 109,
				WD: 'FWD'
			},
			{
				id: 2,
				engine: 'electro',
				price_min: 1.5,
				price_max: 3.0,
				reserve_power_min: 150,
				reserve_power_max: 300,
				power_min: 150,
				WD: 'FWD'
			},
		]
	},
	{
		id: 3,
		brand: 'Nissan',
		model: 'Roox',
		year_start: 2020,
		year_end: 2022,
		img_name: 'nissan_roox.png',
		is_new: false,
		modifications: [
			{
				id: 1,
				engine: 'hybrid',
				price_min: 1,
				price_max: 1.8,
				capacity: 0.8,
				power_min: 52,
				power_max: 64,
				WD: '4WD'
			},
			{
				id: 2,
				engine: 'hybrid',
				price_min: 1,
				price_max: 1.8,
				capacity: 1.4,
				power_min: 52,
				power_max: 64,
				WD: 'FWD'
			},
		]
	},
	{
		id: 4,
		brand: 'Nissan',
		model: 'Juke',
		year_start: 2014,
		year_end: 2019,
		generation: 2,
		img_name: 'nissan_juke.png',
		is_new: false,
		modifications: [
			{
				id: 1,
				engine: 'hybrid',
				price_min: 1,
				price_max: 1.8,
				capacity: 1.3,
				power_min: 52,
				power_max: 64,
				WD: '4WD'
			},
			{
				id: 2,
				engine: 'petrol',
				price_min: 1,
				price_max: 1.3,
				capacity: 1.5,
				power_min: 52,
				power_max: 64,
				WD: 'FWD'
			},
		]
	},
	{
		id: 5,
		brand: 'Audi',
		model: 'Q5',
		year_start: 2017,
		generation: 2,
		img_name: 'audi_q5.png',
		is_new: true,
		modifications: [
			{
				id: 1,
				engine: 'petrol',
				price_min: 1,
				price_max: 1.3,
				capacity: 1.0,
				power_min: 117,
				WD: 'FWD'
			},
			{
				id: 2,
				engine: 'petrol',
				price_min: 2.9,
				price_max: 3.4,
				capacity: 1.2,
				power_min: 249,
				WD: 'AWD'
			},
		]
	},
	{
		id: 6,
		brand: 'Audi',
		model: 'A3',
		year_start: 2020,
		img_name: 'audi_a3.png',
		is_new: false,
		modifications: [
			{
				id: 1,
				engine: 'petrol',
				price_min: 0.9,
				price_max: 1.4,
				capacity: 1.4,
				power_min: 125,
				WD: 'FWD'
			},
		]
	},
]