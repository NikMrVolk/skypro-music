import { useContext, useEffect, useState } from 'react'
import Navigation from '../components/nav/Navigation'
import SideBar from '../components/side/SideBar'
import SoundsBar from '../components/bar/SoundsBar'
import Center from '../components/center/Center'
import { SoundsContext } from '../context/SoundsContext'
import * as SC from '../styles/common'
import { AuthContext } from '../context/AuthContext'
import { useGetAllSoundsQuery } from '../services/sounds/SoundsService'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaylist } from '../store/reducers/sounds'

const MainPage = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const { setUser } = useContext(AuthContext)
	const { data, isLoading, error: isError, isSuccess } = useGetAllSoundsQuery()
	const { song } = useSelector((state) => state.songs)
	const dispatch = useDispatch()

	if (isSuccess) dispatch(setPlaylist(data))

	useEffect(() => {
		if (!!localStorage.getItem('user')) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}
	}, [])

	return (
		<SoundsContext.Provider
			value={{
				data,
				isLoading,
				isError,
				isPlaying,
				setIsPlaying,
			}}
		>
			<SC.Wrapper $w="100%" $minH="100%" $overflow="hidden" $backCol="#383838">
				<SC.Wrapper $maxW="1920px" $h="100vh" $height="100vh" $m="0 auto" $backCol="#181818">
					<SC.Main>
						<Navigation />
						<Center />
						<SideBar />
					</SC.Main>
					{song?.id && <SoundsBar />}
				</SC.Wrapper>
			</SC.Wrapper>
		</SoundsContext.Provider>
	)
}

export default MainPage
