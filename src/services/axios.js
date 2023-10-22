import axios from 'axios'
import { API_ROUTE } from '../utils/constants'

const axiosService = axios.create({
	baseURL: API_ROUTE,
})

const axiosAuthService = axios.create({
	baseURL: API_ROUTE,
})

const $authInterceptor = (config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

axiosAuthService.interceptors.request.use($authInterceptor)

export { axiosService, axiosAuthService }
