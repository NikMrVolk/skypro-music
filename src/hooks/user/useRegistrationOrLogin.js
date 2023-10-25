import { useMutation } from 'react-query'
import { log, reg } from '../../services/user/index'

export const useRegistrationOrLogin = (isLogin) => {
	const regOrLogMut = useMutation({
		mutationFn: (user) => {
			if (isLogin) {
				return log({ ...user })
			} else {
				return reg({ ...user })
			}
		},
	})

	return [regOrLogMut]
}
