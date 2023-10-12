import { useContext, useEffect, useState } from 'react'

import Navigation from '../components/nav/Navigation'
import SideBar from '../components/side/SideBar'
import SoundsBar from '../components/bar/SoundsBar'
import Center from '../components/center/Center'
import { LoadingContext } from '../context/LoadingContext'
import * as SC from '../styles/common'
import { useGetAllSounds } from '../hooks/music/useGetAllSounds'
import { SoundsContext } from '../context/SoundsContext'

const MainPage = () => {
	const { setIsLoading } = useContext(LoadingContext)
	const [data, isLoading] = useGetAllSounds()

	useEffect(() => {
		setIsLoading(true)
		const timeoutId = setTimeout(() => {
			setIsLoading(false)
		}, 1000)
		return () => {
			clearInterval(timeoutId)
		}
	}, [])

	return (
		<SoundsContext.Provider value={{ data, isLoading }}>
			<SC.Wrapper $w="100%" $minH="100%" $overflow="hidden" $backCol="#383838">
				<SC.Wrapper $maxW="1920px" $h="100vh" $height="100vh" $m="0 auto" $backCol="#181818">
					<SC.Main>
						<Navigation />
						<Center />
						<SideBar />
					</SC.Main>
					<SoundsBar />
					<footer className="footer" />
				</SC.Wrapper>
			</SC.Wrapper>
		</SoundsContext.Provider>
	)
}

export default MainPage
