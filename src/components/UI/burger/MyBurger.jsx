import cl from './MyBurger.module.css'

const MyBurger = ({onClick}) => {
	return (
		<div className={cl.burger} onClick={onClick}>
			<span className={cl.burger__line} />
			<span className={cl.burger__line} />
			<span className={cl.burger__line} />
		</div>
	)
}

export default MyBurger
