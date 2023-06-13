import React, { FC, createRef, useContext, useEffect, useState } from 'react'
import DropdownButton from './Button'
import DropdownList from './List'
import { ListItem } from '@/types/dropdown'
import { FiltersContext, FiltersContextType, GlobalContext, GlobalContextType } from './Context'

type Props = {
	name: string
	initItems: ListItem[]
}

const Dropdown: FC<Props> = ({name, initItems}) => {
	const [isDropdownOpened, setIsDropdownOpened] = useState(false)
	const [items, setItems] = useState(initItems)

	const btnRef = createRef<HTMLButtonElement>()
	const listRef = createRef<HTMLUListElement>()

	const {clickOnGlobalWrapper} = useContext<GlobalContextType>(GlobalContext)
	const {resetFiltersEvent} = useContext<FiltersContextType>(FiltersContext)

	useEffect(() => {
		setIsDropdownOpened(false)
	}, [clickOnGlobalWrapper])

	useEffect(() => {
		const resetedItems = [...items]
		const n = items.length

		for (let i = 0; i < n; ++i) {
			resetedItems[i].checked = false
		}

		setItems(resetedItems)
	}, [resetFiltersEvent])

	function handleClickOnDropdown(e: React.MouseEvent<HTMLElement>) {
		e.stopPropagation()
	}

	return (
		<div className="dropdown" onClick={e => handleClickOnDropdown(e)}>
			<label>{name}</label>
			<DropdownButton isDropdownOpened={isDropdownOpened} setIsDropdownOpened={setIsDropdownOpened} items={items} btnRef={btnRef} listRef={listRef}/>
			<DropdownList items={items} setItems={setItems} isDropdownOpened={isDropdownOpened} listRef={listRef}/>
		</div>
	)
}

export default Dropdown