import { IUser } from "@/models/IUser";

export interface AuthState {
	user: IUser
	isAuth: boolean
	loading: boolean
	error: string | undefined
}

export interface LogRegAction {
	email: string
	password: string
}