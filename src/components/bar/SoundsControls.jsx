import * as SC from '../../styles/common'
import barSoundsControllers from '../../data/barSoundsControllers'

const SoundsControls = () => {
	return (
		<SC.Flex $padding="0 27px 0 31px">
			{barSoundsControllers.map((controller) => (
				<SC.Flex
					key={controller.src}
					$margin={controller.mrWr}
					className={controller.class}
					$padding="5px"
					$alignC
				>
					<SC.Svg
						$h={controller.height}
						$w={controller.width}
						$fill={controller.fill}
						$stroke={controller.stroke}
						alt={controller.alt}
					>
						<use xlinkHref={controller.src} />
					</SC.Svg>
				</SC.Flex>
			))}
		</SC.Flex>
	)
}

export default SoundsControls
