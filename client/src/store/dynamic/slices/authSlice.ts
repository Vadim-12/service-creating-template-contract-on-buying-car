import { API_URL } from "@/http"
import { IUser } from "@/models/IUser"
import { AuthResponse } from "@/models/response/AuthResponse"
import AuthService from "@/services/AuthService"
import { AuthState, LogRegAction } from "@/types/auth"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

const initialUserState: IUser = {
	id: '',
	email: '',
	isActivated: false,
}

const initialState: AuthState = {
	user: initialUserState,
	isAuth: true,
	loading: false,
	error: ''
}

export const login = createAsyncThunk<AuthResponse, LogRegAction, {rejectValue: string}>(
	'auth/login',
	async (action, {rejectWithValue}) => {
		try {
			const {email, password} = action
			const response = await AuthService.login(email, password)
			return response.data
		} catch (e: any) {
			console.log(e.response.data.message)
			return rejectWithValue(e.response.data.message)
		}
	}
)

export const registration = createAsyncThunk<AuthResponse, LogRegAction, {rejectValue: string}>(
	'auth/registration',
	async (action, {rejectWithValue}) => {
		try {
			const {email, password} = action
			const response = await AuthService.registration(email, password)
			return response.data

			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			//setAuth(true)
			//setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
			return rejectWithValue(e.response?.data?.message)
		}
	}
)

export const logout = createAsyncThunk<void, undefined, {rejectValue: string}>(
	'auth/logout',
	async (_, {rejectWithValue}) => {
		try {
			const response = await AuthService.logout()
			console.log(response)

			localStorage.removeItem('token')
			//setAuth(false)
			//setUser({} as IUser)
		} catch (e: any) {
			console.log(e.response?.data?.message)
			return rejectWithValue(e.response?.data?.message)
		}
	}
)

export const checkAuth = createAsyncThunk<void, undefined, {rejectValue: string}>(
	'auth/checkAuth',
	async (_, {rejectWithValue}) => {
		//setLoading(true)
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
			localStorage.setItem('token', response.data.accessToken)
			//setAuth(true)
			//setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
			return rejectWithValue(e.response?.data?.message)
		} finally {
			//setLoading(false)
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, (state, action) => {
				state.error = ''
			})
			.addCase(login.fulfilled, (state, action)  => {
				console.log(action.payload)
				localStorage.setItem('token', action.payload.accessToken)
				state.isAuth = true
				state.user = action.payload.user
			})
			.addCase(login.rejected, (state, action) => {
				state.error = action.error.message
			})
	}
})

//export const { setAuth, setUser, setLoading, setError } = authSlice.actions
export default authSlice