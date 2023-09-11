import { useContext } from 'react'
import SideItem from './SideItem'
import SideSkilet from '../skilet/SideSkilet'
import { LoadingContext } from '../../context/LoadingContext'

const SideList = ({ props }) => {
	const data = [
		{ id: 1, src: 'img/side/playlist01.png', alt: `day's playlist` },
		{ id: 2, src: 'img/side/playlist02.png', alt: `day's playlist` },
		{ id: 3, src: 'img/side/playlist03.png', alt: `day's playlist` },
	]

	const { isLoading } = useContext(LoadingContext)

	return (
		<div className="sidebar__block">
			<div className="sidebar__list">
				{data.map((sideBar) =>
					isLoading ? (
						<SideSkilet key={sideBar.id} />
					) : (
						<SideItem key={sideBar.id} {...sideBar} />
					)
				)}
			</div>
		</div>
	)
}

export default SideList
