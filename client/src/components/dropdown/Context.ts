import { createContext } from "react";

export type GlobalContextType = {
	clickOnGlobalWrapper: boolean
	setClickOnGlobalWrapper: React.Dispatch<React.SetStateAction<boolean>>
}

export type FiltersContextType = {
	resetFiltersEvent: boolean
	setResetFiltersEvent: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextType>({clickOnGlobalWrapper: false, setClickOnGlobalWrapper: () => null})
export const FiltersContext = createContext<FiltersContextType>({resetFiltersEvent: false, setResetFiltersEvent: () => null})