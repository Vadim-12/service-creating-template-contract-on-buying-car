import { MenuLink } from "@/types/menu";

const menuLinks: MenuLink[] = [
  { name: 'Подбор авто', href: '/cars', inMenu: true },
	{ name: 'Избранное', href: '/favours', inMenu: true },
	{ name: 'Заполнение данных', href: '/contract/create', inMenu: false },
	{ name: 'Просмотр авто', href: '/cars/[id]', inMenu: false },
	{ name: 'Регистрация', href: '/auth/register', inMenu: false },
	{ name: 'Авторизация', href: '/auth/login', inMenu: false }
]

export {
	menuLinks,
}