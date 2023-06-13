import { useAppSelector } from "@/hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useCheckIsLoginned = () => {
	const router = useRouter()

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			//router.push('/auth/login')
		}
	}, [])
}