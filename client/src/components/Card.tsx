import Link from 'next/link'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { Car } from '@/types/car'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { addToCart, removeFromCart } from '@/store/dynamic/slices/cartSlice'

interface CarProps extends Car {}

const Card: FC<CarProps> = ({id, brand, model, year_start, year_end, img_name, modifications}) => {
	const [isCapacity, setIsCapacity] = useState(false)
	const [modsInCart, setModsInCart] = useState<number[]>([])

	const dispatch = useAppDispatch()
	const cartGoods = useAppSelector(state => state.cart.goods)
	//const userLogin = useAppSelector(state => state.user.login)

	const localAddToCart = (carId: number, modId: number) => dispatch(addToCart({carId, modId}))
	const localRemoveFromCart = (carId: number, modId: number) => dispatch(removeFromCart({carId, modId}))

	useEffect(() => {
		if (modifications) {
			for (let i = 0; i < modifications.length; ++i) {
				if (modifications[i].capacity) {
					setIsCapacity(true)
					break
				}
			}

			setModsInCart(cartGoods.find(good => good.carId === id)?.modsId || [])
		}
	}, [])

	useEffect(() => {
		setModsInCart(cartGoods.find(good => good.carId === id)?.modsId || [])
	}, [cartGoods])

	/*
	async function createContractTemplate(modifId: number) {
		const response = await API.post<string>('/contract/create', {
			userLogin,
			carId: id,
			modifId,
		})

		const link = response.data
		return link
	}
	*/

	function handleChangeCart(modId: number) {
		if (modsInCart.includes(modId)) {
			localRemoveFromCart(id, modId)
		} else {
			localAddToCart(id, modId)
		}
	}

	return (
		<div className="card">
			<div className="box_1">
				<div className="content">
					<h3>
						<Link href={`/cars/${id}`}>{brand} {model}</Link>
					</h3>
					<table>
						<tbody>
							<tr>
								<th></th>
								<th>Двигатель</th>
								<th>Цена млн.р.</th>
								{
									isCapacity ? <th>V л.</th> : <th className='reserve_power_col'>Запас хода км</th>
								}
								<th>P л.с.</th>
								<th>WD</th>
							</tr>
							{
								modifications?.map(mod => (
									<tr key={mod.id} className='modification__row'>
										<td onClick={() => handleChangeCart(mod.id)}>
											<Image className='add-to-cart-icon' src={`/assets/icons/${modsInCart.includes(mod.id) ? 'delete-from-cart-icon.png' : 'add-cart-icon.png'}`} alt={modsInCart.includes(mod.id) ? 'Удалить из корзины' : 'Добавить в корзину'} width={25} height={27}/>
										</td>
										<td className="bg" height="50">{mod.engine}</td>
										<td className="bg">{mod.price_min}{mod.price_max && `-${mod.price_max}`}</td>
										<td>{isCapacity ? mod.capacity : `${mod.reserve_power_min}${mod.reserve_power_max ? `-${mod.reserve_power_max}` : ''}`}</td>
										<td>{mod.power_min}{mod.power_max && `-${mod.power_max}`}</td>
										<td>{mod.WD}</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
			<div className="box_2">
				<div className="box_2_header">
					<h4>
						<Link href={`/cars/${id}`} className="underlined">{year_start}{year_end && `-${year_end}`}</Link>
					</h4>
					<Image src="/assets/icons/logo_in_card.png" alt="logo_in_card" width={1000} height={1000} />
				</div>
				<Link href={`/cars/${id}`} className="link_img">
					<Image src={`/assets/icons/${img_name}`} alt="car_in_card" width={1000} height={1000} className="car_in_card" />
				</Link>
			</div>
		</div>
	)
}

export default Card