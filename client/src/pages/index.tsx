import { useAppSelector } from '@/hooks'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'

const Index: FC = () => {
	//const isLoginned = useAppSelector(state => state.user.isLoginned)
	const router = useRouter()

	useEffect(() => {
		/*
		if (isLoginned) {
			router.push('/cars')
		} else {
			router.push('/auth/login')
		}
		*/
		router.push('/cars')
	}, [])

	return (
		<></>
	)
}

export default Index