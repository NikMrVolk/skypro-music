const SideItem = ({ src, alt }) => {
	return (
		<div className="sidebar__item">
			<a className="sidebar__link" href="#">
				<img className="sidebar__img" src={src} alt={alt} />
			</a>
		</div>
	)
}

export default SideItem
