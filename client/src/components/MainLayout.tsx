import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Header from './Header'
import { menuLinks } from '@/store/static/menu'
import router from 'next/router'
import { setCurPage } from '@/store/dynamic/slices/pageSlice'
import { useAppDispatch } from '@/hooks'
import { useCheckIsLoginned } from '@/utils'
import Image from 'next/image'
import { GlobalContext } from './dropdown/Context'
import ExitButton from './ExitButton'

interface Props {
	children: ReactNode
}
 
const MainLayout: FC<Props> = ({children}) => {
	const dispatch = useAppDispatch()
	const handleChangePage = (curPageIndex: number) => dispatch(setCurPage({curPageIndex}))

	const [clickOnGlobalWrapper, setClickOnGlobalWrapper] = useState(false)
	const [isCursorPointer, setIsCursorPointer] = useState(false)
	const [mouseWindowPositionX, setWindowMousePositionX] = useState(0)
	const [mouseWindowPositionY, setWindowMousePositionY] = useState(0)

	const mouseIconCursorRef = useRef<HTMLImageElement>(null)
	const appRef = useRef<HTMLDivElement>(null)

	function handleClickOnAppWrapper(e: React.MouseEvent<HTMLElement>) {
		setClickOnGlobalWrapper(prev => !prev)
	}

	useCheckIsLoginned()
  
	useEffect(() => {
    const link_index = menuLinks.findIndex(link => link.href === router.pathname)
    if (link_index > -1) {
      handleChangePage(link_index)
    }
  }, [router.pathname])

	useEffect(() => {
		if (appRef.current && window) {
			if (appRef.current.clientHeight < window.innerHeight) {
				appRef.current.style.height = '100vh'
			}
		}

		if (mouseIconCursorRef.current) {
			mouseIconCursorRef.current.style.top = `${mouseWindowPositionY}px`
			mouseIconCursorRef.current.style.left = `${mouseWindowPositionX}px`
		}
	}, [])

	function handleEscapeDown(e: React.KeyboardEvent<HTMLElement>) {
		console.log(e.key)
		if (e.key === 'Escape' || e.key === 'Tab' || e.key === 'Enter') {
			setClickOnGlobalWrapper(prev => !prev)
		}
	}

	function handleMoveMouse(e: React.MouseEvent<HTMLElement>) {
		setWindowMousePositionX(e.clientX)
		setWindowMousePositionY(e.clientY)

		if (mouseIconCursorRef.current) {
				mouseIconCursorRef.current.style.left = `${e.clientX}px`
				mouseIconCursorRef.current.style.top = `${window.scrollY + e.clientY}px`
		}
	}

	function handleSetCursorPointer(e: React.MouseEvent<HTMLElement>) {
		setIsCursorPointer(true)
	}

	function handleSetCursorDefault(e: React.MouseEvent<HTMLElement>) {
		setIsCursorPointer(false)
	}
	
	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		//console.log(e.currentTarget.scrollTop)
		// можно прописать любые действия при скролле
	}
	
	return (
		<GlobalContext.Provider value={{clickOnGlobalWrapper, setClickOnGlobalWrapper}}>
			<Image
				ref={mouseIconCursorRef}
				className='cursor'
				src={`/assets/icons/cursor-${isCursorPointer ? 'pointer' : 'default'}.png`}
				alt='cursor'
				width={1000}
				height={1000}
			/>
			<div
				ref={appRef}
				className='app-wrapper'
				onClick={(e) => handleClickOnAppWrapper(e)}
				onScroll={handleScroll}
				onKeyDown={e => handleEscapeDown(e)}
				onMouseMove={e => handleMoveMouse(e)}
				onMouseEnter={e => handleMoveMouse(e)}
			>
				<ExitButton
					handleSetCursorDefault={handleSetCursorDefault}
					handleSetCursorPointer={handleSetCursorPointer}
					setIsCursorPointer={setIsCursorPointer}
				/>
				<Header/>
				<main>
					{children}
				</main>
			</div>
		</GlobalContext.Provider>
		
	)
}

export default MainLayout