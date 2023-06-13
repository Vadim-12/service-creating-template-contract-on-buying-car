export interface Good {
	carId: number
	modId: number
}

interface CarInCart {
	carId: number
	modsId: number[]
}

export interface CartState {
	goods: CarInCart[]
}

export interface AddToCartAction {
	carId: number
	modId: number
}

export interface RemoveFromCartAction {
	carId: number
	modId: number
}