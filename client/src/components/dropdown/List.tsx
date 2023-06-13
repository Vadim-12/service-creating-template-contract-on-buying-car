import { ListItem } from '@/types/dropdown'
import React, { FC } from 'react'
import DropdownListItem from './ListItem'

type Props = {
	items: ListItem[]
	setItems: React.Dispatch<React.SetStateAction<ListItem[]>>

	isDropdownOpened: boolean

	listRef: React.RefObject<HTMLUListElement>
}

const DropdownList: FC<Props> = ({items, setItems, isDropdownOpened, listRef}) => {
	
	function handleClickOnList(e: React.MouseEvent<HTMLUListElement>) {
		e.stopPropagation()
	}

	return (
		<ul ref={listRef} className={`dropdown__list${isDropdownOpened ? ' dropdown__list-active' : ''}`} onClick={e => handleClickOnList(e)}>
			{
				items.map((item, index) =>
					<DropdownListItem key={index} curItem={item} items={items} setItems={setItems}/>
				)
			}
		</ul>
	)
}

export default DropdownList