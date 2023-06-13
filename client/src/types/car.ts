import { Modification } from "./modification"

export interface Car {
	id: number
	brand: string
	model: string
	year_start: number
	year_end?: number
	generation?: number
	img_name: string
	modifications: Modification[]
	is_new: boolean
}

/*
enum CarsActionTypes {
	FETCH_CARS = 'FETCH_CARS',
	FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
	FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
	ADD_CAR_TO_FAVOUR = 'ADD_CAR_TO_FAVOUR'
}
*/

export interface CarsState {
	cars: Car[]
	loading: boolean
	error: null | string
}

export interface FetchCarsAction {
	loading: boolean
}

export interface FetchCarsSuccessAction {
	cars: Car[]
}

export interface FetchCarsErrorAction {
	error: string
}

export interface AddCarAction {
	car: Car
}

export interface FavourCarsState {
	cars: Car[]
}