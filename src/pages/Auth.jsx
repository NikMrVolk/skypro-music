import { useState } from 'react'
import Login from '../components/login/Login'

const Auth = () => {
	const [userExist, setUserExist] = useState(true)
	return <Login userExist={userExist} />
}

export default Auth
