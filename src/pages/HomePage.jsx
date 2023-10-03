import { useContext, useEffect } from 'react'
import Navigation from '../components/nav/Navigation'
import SideBar from '../components/side/SideBar'
import SoundsBar from '../components/bar/SoundsBar'
import Center from '../components/center/Center'
import { LoadingContext } from '../context/LoadingContext'
import * as SC from '../styles/common'

const HomePage = () => {
	const { isLoading, setIsLoading } = useContext(LoadingContext)

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
		<SC.Wrapper $w="100%" $minH="100%" $overflow="hidden" $backCol="#383838">
			<SC.Wrapper $maxW="1920px" $height="100vh" $m="0 auto" $backCol="#181818">
				<SC.Main>
					<Navigation />
					<Center />
					<SideBar />
				</SC.Main>
				<SoundsBar />
				<footer className="footer" />
			</SC.Wrapper>
		</SC.Wrapper>
	)
}

export default HomePage
