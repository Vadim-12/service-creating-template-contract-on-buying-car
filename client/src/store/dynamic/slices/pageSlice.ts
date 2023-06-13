import { PageState } from "@/types/page"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: PageState = {
	curPageIndex: 0
}

const pageSlice = createSlice({
	name: 'curPage',
	initialState,
	reducers: {
		setCurPage: (state, action: PayloadAction<number>) => {
			state.curPageIndex = action.payload
		}
	}
})

export const { setCurPage } = pageSlice.actions
export default pageSlice