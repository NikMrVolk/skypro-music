import { useContext, useEffect, useState } from 'react'
import Navigation from '../components/nav/Navigation'
import SideBar from '../components/side/SideBar'
import SoundsBar from '../components/bar/SoundsBar'
import Center from '../components/center/Center'
import { useGetAllSounds } from '../hooks/music/useGetAllSounds'
import { SoundsContext } from '../context/SoundsContext'
import * as SC from '../styles/common'
import { AuthContext } from '../context/AuthContext'

const MainPage = () => {
	const [songBeingPlayedId, setSongBeingPlayedId] = useState(null)
	const [data, isLoading, isError] = useGetAllSounds()
	const [isPlaying, setIsPlaying] = useState(false)
	const { setUser } = useContext(AuthContext)

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
				songBeingPlayedId,
				setSongBeingPlayedId,
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
					{songBeingPlayedId && <SoundsBar />}
				</SC.Wrapper>
			</SC.Wrapper>
		</SoundsContext.Provider>
	)
}

export default MainPage
