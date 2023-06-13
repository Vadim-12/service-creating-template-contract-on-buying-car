import { AppDispatch, RootState } from "@/store/dynamic";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector