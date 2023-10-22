import { axiosService } from '../axios'

export const reg = async ({ email, password, username }) => {
	const response = await axiosService.post(`user/signup/`, {
		username,
		email,
		password,
	})

	return response.data
}

export const log = async ({ email, password }) => {
	const response = await axiosService.post(`user/login/`, {
		email,
		password,
	})

	return response.data
}
