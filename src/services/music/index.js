import { axiosService } from '../axios'

class MusicService {
	async getAll() {
		const response = await axiosService.get(`catalog/track/all`)

		return response.data
	}

	async getOne(id) {
		const response = await axiosService.get(`catalog/track/${id}`)

		return response.data
	}
}

const musicService = new MusicService()

export default musicService
