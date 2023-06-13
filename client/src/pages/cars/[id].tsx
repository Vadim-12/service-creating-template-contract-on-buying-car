import { useAppSelector } from '@/hooks'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const OneCarPage: FC<Props> = ({ data }) => {
	const router = useRouter()

	useEffect(() => {
		if (data.index < 0) {
			router.push('/cars')
		}
	}, [])

	return (
		<div>Машина с index: {data.index}</div>
	)
}


type ServerSideProps = {
	index: number
}

export const getServerSideProps: GetServerSideProps<{ data: ServerSideProps }> = async (context) => {
	const id = Number(context.query['id'])
	const cars = useAppSelector(state => state.cars.cars)
	const index = cars.findIndex(car => car.id === id)
	const data = {
		index
	}

	return {
		props: {
			data
		}
	}
}

export default OneCarPage