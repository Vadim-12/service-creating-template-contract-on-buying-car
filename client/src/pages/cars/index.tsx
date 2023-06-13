import Card from '@/components/Card'
import MainLayout from '@/components/MainLayout'
import Dropdown from '@/components/dropdown'
import { FiltersContext } from '@/components/dropdown/Context'
import { useAppSelector } from '@/hooks'
import React, { FC, useState } from 'react'

const CarsPage: FC = () => {
	const cars = useAppSelector(state => state.cars.cars)
	const [resetFiltersEvent, setResetFiltersEvent] = useState(false)

	function handleResetFilters(e: React.MouseEvent<HTMLButtonElement>) {
		setResetFiltersEvent(prev => !prev)
	}

	return (
		<MainLayout>
			<div className="container">
				<h1>Подбор авто</h1>
				<div className="catalog-wrap">
					<div className="filters-block">
						<FiltersContext.Provider value={{resetFiltersEvent, setResetFiltersEvent}}>
							<form className='form-filters'>
								<h2>Фильтры</h2>
								<div className="form-group">
									<Dropdown
										name='Марка'
										initItems={[
											{id: 1, name: 'Nissan', value: 'nissan', checked: false},
											{id: 2, name: 'Audi', value: 'audi', checked: false},
									]}/>
									<Dropdown
										name='Тип двигателя'
										initItems={[
											{id: 1, name: 'Бензиновый', value: 'petrol', checked: false},
											{id: 2, name: 'Дизельный', value: 'diesel', checked: false},
											{id: 3, name: 'Электро', value: 'electro', checked: false},
											{id: 4, name: 'Гибрид', value: 'hybrid', checked: false},
									]}/>
								</div>
								<button type='reset' className='reset-filters-btn' onClick={e => handleResetFilters(e)}>Сбросить фильтры</button>
							</form>
						</FiltersContext.Provider>
					</div>
					<div className="cards-block">
						{
							cars.length && cars.map(car => (
								<Card
									id={car.id}
									key={car.id}
									brand={car.brand}
									model={car.model}
									year_start={car.year_start}
									year_end={car.year_end}
									img_name={car.img_name}
									modifications={car.modifications}
									is_new={car.is_new}
								/>
							))
						}
						{
							cars && !cars.length && 
							<p className='loading'>
								Загрузка авто...
							</p>	
						}
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default CarsPage