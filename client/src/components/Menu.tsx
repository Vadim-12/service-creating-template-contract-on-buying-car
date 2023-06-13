import { useAppSelector } from '@/hooks'
import { menuLinks } from '@/store/static/menu'
import Link from 'next/link'
import React, { FC } from 'react'

const Menu: FC = () => {
	const curPageIndex = useAppSelector(state => state.curPage).curPageIndex

	return (
		<nav className='menu'>
			{
				menuLinks.map((link, index) => (
					link.inMenu && <Link key={index} href={link.href} className={'link' + (curPageIndex === index ? ' cur' : '')}>{link.name}</Link>
				))
			}
		</nav>
	)
}

export default Menu