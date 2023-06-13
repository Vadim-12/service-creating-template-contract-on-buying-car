import React, { FC } from 'react'
import Image from 'next/image'
import { useAppDispatch } from '@/hooks'
import { useRouter } from 'next/router'

type Props = {
	handleSetCursorPointer: (e: React.MouseEvent<HTMLElement>) => void
	handleSetCursorDefault: (e: React.MouseEvent<HTMLElement>) => void
	setIsCursorPointer: React.Dispatch<React.SetStateAction<boolean>>
}

const ExitButton: FC<Props> = ({handleSetCursorDefault, handleSetCursorPointer, setIsCursorPointer}) => {
	const dispatch = useAppDispatch()
	const router = useRouter()

	const handleExit_ = () => dispatch(setIsLoginned({isLoginned: false}))

	function handleExit() {
		handleExit_()
		router.push('/auth/login')
	}

	return (
		<button
			type='button'
			className='exit-btn'
			onClick={handleExit}
			onMouseEnter={e => handleSetCursorPointer(e)}
			onMouseLeave={e => handleSetCursorDefault(e)}
		>
			Выйти
			<Image src='/assets/icons/logout-icon.png' alt='logout-icon' width={15} height={15}/>
		</button>
	)
}

export default ExitButton