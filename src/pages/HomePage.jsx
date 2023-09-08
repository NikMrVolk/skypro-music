import Navigation from '../components/nav/Navigation'
import SideBar from '../components/side/SideBar'
import SoundsBar from '../components/bar/SoundsBar'
import Center from '../components/center/Center'

const HomePage = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<main className="main">
					<Navigation />
					<Center />
					<SideBar />
				</main>
				<SoundsBar />
				<footer className="footer" />
			</div>
		</div>
	)
}

export default HomePage
