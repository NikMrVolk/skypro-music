import Auth from '../pages/Auth'
import Favorites from '../pages/Favorites'
import MainPage from '../pages/MainPage'
import SingleCategory from '../pages/SingleCategory'
import NotFound from '../pages/NotFound'

import {
	MAIN_ROUTE,
	CATEGORY_ROUTE,
	FAVORITE_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
} from '../utils/constants'

export const publicRoutes = [
	{
		element: <Auth />,
		path: LOGIN_ROUTE,
	},
	{
		element: <Auth />,
		path: REGISTRATION_ROUTE,
	},
	{
		element: <NotFound />,
		path: '*',
	},
]

export const privateRoutes = [
	{
		element: <MainPage />,
		path: MAIN_ROUTE,
	},
	{
		element: <Favorites />,
		path: FAVORITE_ROUTE,
	},
	{
		element: <SingleCategory />,
		path: CATEGORY_ROUTE + '/:id',
	},
]
