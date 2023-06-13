import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarsState, FetchCarsAction, FetchCarsErrorAction, FetchCarsSuccessAction } from '../../../types/car'

const initialState: CarsState = {
	cars: [],
	loading: false,
	error: null
}

const carSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		fetchCars: (state, action: PayloadAction<FetchCarsAction>) => {
			state.loading = action.payload.loading
		},
		fetchCarsSuccess: (state: CarsState, action: PayloadAction<FetchCarsSuccessAction>) => {
			state.loading = false
			state.cars = action.payload.cars
		},
		fetchCarsError: (state: CarsState, action: PayloadAction<FetchCarsErrorAction>) => {
			state.loading = false
			state.error = action.payload.error
		}
	}
})

export const { fetchCars, fetchCarsSuccess, fetchCarsError } = carSlice.actions
export default carSlice