import React, { FC, useContext, useEffect, useState } from 'react'
import { GlobalContext, GlobalContextType } from './Context'
import { ListItem } from '@/types/dropdown'

type Props = {
	isDropdownOpened: boolean
	setIsDropdownOpened: React.Dispatch<React.SetStateAction<boolean>>

	items: ListItem[]

	btnRef: React.RefObject<HTMLButtonElement>
	listRef: React.RefObject<HTMLUListElement>
}

const DropdownButton: FC<Props> = ({isDropdownOpened, setIsDropdownOpened, items, btnRef, listRef}) => {
	const { setClickOnGlobalWrapper } = useContext<GlobalContextType>(GlobalContext)
	const [countValues, setCountValues] = useState(0)
	const [strInput, setStrInput] = useState('')

	useEffect(() => {
		if (!isDropdownOpened) {
			btnRef.current?.blur()
		}
	}, [isDropdownOpened])

	useEffect(() => {
		let cnt = 0
		let newStrInput = ''
		const n = items.length

		for (let i = 0; i < n; ++i) {
			if (items[i].checked) {
				newStrInput += (cnt ? ', ' : '') + items[i].name
				++cnt
			}
		}

		setCountValues(cnt)
		setStrInput(newStrInput)
	}, [items])

	function handleClickOnDropdownButton(e: React.MouseEvent<HTMLButtonElement>) {
		if (!isDropdownOpened) {
			setClickOnGlobalWrapper(prev => !prev)
			setTimeout(() => setIsDropdownOpened(prev => !prev), 10)
		} else {
			setIsDropdownOpened(false)
		}
	}

	useEffect(() => {
		if (listRef.current && btnRef.current) {
			listRef.current.style.top = `${btnRef.current.getBoundingClientRect().height + 26}px`
		}
	}, [btnRef.current?.getBoundingClientRect().height])

	return (
		<button ref={btnRef} type="button" className={`dropdown__button${isDropdownOpened ? ' focus' : ''}`} onClick={(e) => handleClickOnDropdownButton(e)}>
			{countValues ? strInput : 'Выберите...'}
		</button>
	)
}

export default DropdownButton