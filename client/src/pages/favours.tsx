import Card from '@/components/Card'
import MainLayout from '@/components/MainLayout'
import { useAppSelector } from '@/hooks'
import { Car } from '@/types/car'
import React, { FC, useEffect, useState } from 'react'

const FavoursPage: FC = () => {
	const allCars = useAppSelector(state => state.cars.cars) // Все авто магазина
	const cartGoods = useAppSelector(state => state.cart.goods) // Корзина (в какой машине какие есть модификации)
	const [favours, setFavours] = useState<Car[]>([]) // Проструктурированная корзина (модификации, укомплектованные по машинам)

	function structFavoursState() {
		const favoursRes = []

		for(let cartGood of cartGoods) {
			const currentCar = {} as Car
			Object.assign(currentCar, allCars.find(car => car.id === cartGood.carId))
			if (!currentCar) {
				continue
			}
			const modifs: number[] = cartGood.modsId
			if (!modifs) {
				continue
			}
			currentCar.modifications = currentCar.modifications.filter(modif => modifs.find(cartModifId => cartModifId === modif.id))
			favoursRes.push(currentCar)
		}

		setFavours(favoursRes)
	}

	useEffect(() => {
		structFavoursState()
	}, [])

	useEffect(() => {
		structFavoursState()
	}, [cartGoods])

	return (
		<MainLayout>
			<div className="container">
				<h1>Избранное</h1>
				<div className="cards-block">
					{
						favours.length ? favours.map(favour => (
							<Card
								id={favour.id}
								key={favour.id}
								brand={favour.brand}
								model={favour.model}
								year_start={favour.year_start}
								year_end={favour.year_end}
								img_name={favour.img_name}
								modifications={favour.modifications}
								is_new={favour.is_new}
							/>
						)) : null
					}
				</div>
			</div>
		</MainLayout>
	)
}

export default FavoursPage