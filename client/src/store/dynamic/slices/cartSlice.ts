import { AddToCartAction, CartState, RemoveFromCartAction } from "@/types/favour"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartState = {
	goods: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<AddToCartAction>) => {
			if (state.goods) {
				let carGoodIndex = state.goods.findIndex(good => good.carId === action.payload.carId)

				if (carGoodIndex < 0) {
					state.goods.push({carId: action.payload.carId, modsId: []})
					carGoodIndex = state.goods.length - 1
				}

				let modsOfCar = state.goods[carGoodIndex].modsId
				modsOfCar = Array.from(new Set([...modsOfCar, action.payload.modId]))

				state.goods[carGoodIndex].modsId = modsOfCar
			}
		},
		removeFromCart: (state, action: PayloadAction<RemoveFromCartAction>) => {
			if (state.goods) {
				const carGood = state.goods.find(good => good.carId === action.payload.carId)
				
				if (!carGood) return

				carGood.modsId = carGood.modsId.filter(modId => modId !== action.payload.modId)
				state.goods = state.goods.filter(good => good.modsId.length)
			}
		}
	}
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice