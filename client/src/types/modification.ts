export type Engine = 'petrol' | 'diesel' | 'electro' | 'hybrid'

export interface Modification {
	id: number
	engine: Engine
	price_min: number
	price_max?: number
	capacity?: number
	reserve_power_min?: number
	reserve_power_max?: number
	power_min: number
	power_max?: number
	WD: string
}