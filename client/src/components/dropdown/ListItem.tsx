import { ListItem } from '@/types/dropdown'
import React, { FC } from 'react'

type Props = {
	curItem: ListItem

	items: ListItem[]
	setItems: React.Dispatch<React.SetStateAction<ListItem[]>>
}

const DropdownListItem: FC<Props> = ({curItem, items, setItems}) => {
	function handleClick(e: React.MouseEvent<HTMLLIElement>) {
		setItems(items.map(item => {
			if (item.name === curItem.name) {
				const newItem = item
				newItem.checked = !item.checked
				return newItem
			}
			return item
		}))
	}

	return (
		<li onClick={(e) => handleClick(e)} className={`dropdown__list-item${curItem.checked ? ' dropdown__list-item_checked' : ''}`} data-value={curItem.value}>{curItem.name}</li>
	)
}

export default DropdownListItem