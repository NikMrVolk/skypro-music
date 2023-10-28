import { Outlet } from 'react-router'
import * as SC from '../../styles/common'
import SoundsBar from '../bar/SoundsBar'
import Navigation from '../nav/Navigation'
import SideBar from '../side/SideBar'
import { useSelector } from 'react-redux'

const MainLayout = () => {
	const { song } = useSelector((state) => state.songs)

	return (
		<SC.Wrapper $w="100%" $minH="100%" $overflow="hidden" $backCol="#383838">
			<SC.Wrapper $maxW="1920px" $h="100vh" $height="100vh" $m="0 auto" $backCol="#181818">
				<SC.Main>
					<Navigation />
					<SC.Block $w="auto" $fGrow="3" $p="20px 40px 20px 50px">
						<Outlet />
					</SC.Block>
					<SideBar />
				</SC.Main>
				{song?.id && <SoundsBar />}
			</SC.Wrapper>
		</SC.Wrapper>
	)
}

export default MainLayout
