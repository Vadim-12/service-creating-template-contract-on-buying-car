import React, { FC, createRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Login: FC = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const setWrongPasswordError = () => setError('Неверный пароль')

	const mouseCursorRef = createRef<HTMLImageElement>()

	const [isCursorPointer, setIsCursorPointer] = useState(false)

	function handleMoveMouse(e: React.MouseEvent<HTMLElement>) {
		if (mouseCursorRef.current) {
			mouseCursorRef.current.style.left = `${e.clientX}px`
			mouseCursorRef.current.style.top = `${e.clientY}px`
		}
	}

	useEffect(() => {
		//if (user.isLoginned) {
		//	router.push('/auth/already_loginned')
		//}
		//router.push('/cars')
	}, [])

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		try {
			// отправка запроса
		} catch (error: any) {
			setError(error.message)
		}

		router.push(`/cars`)
	}

	function handleSetCursorPointer(e: React.MouseEvent<HTMLElement>) {
		setIsCursorPointer(true)
	}

	function handleSetCursorDefault(e: React.MouseEvent<HTMLElement>) {
		setIsCursorPointer(false)
	}

	return (
		<>
			<Image ref={mouseCursorRef} className='cursor' src={`/assets/icons/cursor-${isCursorPointer ? 'pointer' : 'default'}.png`} alt='cursor' width={1000} height={1000}/>
			<div className="auth-wrapper"  onMouseMove={e => handleMoveMouse(e)} onMouseEnter={e => handleMoveMouse(e)}>
				<form className='auth-form' onSubmit={(e) => handleSubmit(e)}>
					<input type='text' placeholder='Логин' /*onChange={}*//>
					<input type='password' placeholder='Пароль' /*onChange={handlePasswordInput}*//>
					<input type='submit' value='Войти' onMouseEnter={e => handleSetCursorPointer(e)} onMouseLeave={e => handleSetCursorDefault(e)}/>
					{error && (
						<p className='auth-error'>Ошибка входа: {error}</p>
					)}
				</form>
			</div>
		</>
		
	)
}

export default Login