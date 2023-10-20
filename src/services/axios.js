import axios from 'axios'
import { API_ROUTE } from '../utils/constants'

export const axiosService = axios.create({
	baseURL: API_ROUTE,
})
