import SoundsPlayer from "./SoundsPlayer"
import SoundsVolume from "./SoundsVolume"

const SoundsBar = ({ props }) => {
	return (
		<div className="bar">
			<div className="bar__content">
				<div className="bar__player-progress" />
				<div className="bar__player-block">
					<SoundsPlayer />
					<SoundsVolume/>
				</div>
			</div>
		</div>
	)
}

export default SoundsBar
