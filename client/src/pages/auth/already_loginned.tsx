import { useRouter } from 'next/router'
import React, { FC, createRef, useEffect, useState } from 'react'
import Image from 'next/image'

const alreadyLoginnedPage: FC = () => {
	const router = useRouter()

	const mouseCursorRef = createRef<HTMLImageElement>()

	const [isCursorPointer, setIsCursorPointer] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			router.push('/cars')
		}, 2000)
	}, [])

	function handleMoveMouse(e: React.MouseEvent<HTMLElement>) {
		//console.log(e.clientX, e.clientY)

		if (mouseCursorRef.current) {
			mouseCursorRef.current.style.left = `${e.clientX}px`
			mouseCursorRef.current.style.top = `${e.clientY}px`
		}
	}

	return (
		<div className="global-wrap" onMouseMove={e => handleMoveMouse(e)} onMouseEnter={e => handleMoveMouse(e)}>
			<Image ref={mouseCursorRef} className='cursor' src={`/assets/icons/cursor-${isCursorPointer ? 'pointer' : 'default'}.png`} alt='cursor' width={1000} height={1000}/>
			<div className="already-loginned-content">
				Вы уже авторизованы!
			</div>
		</div>
	)
}

export default alreadyLoginnedPage