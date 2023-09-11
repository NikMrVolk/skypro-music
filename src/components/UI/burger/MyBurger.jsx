import cl from './MyBurger.module.css'

const MyBurger = () => {
	return (
		<div className={cl.burger}>
			<span className={cl.burger__line} />
			<span className={cl.burger__line} />
			<span className={cl.burger__line} />
		</div>
	)
}

export default MyBurger
