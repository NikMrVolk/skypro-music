import * as S from './style'

const MyBurger = ({ onClick }) => {
	return (
		<S.Burger onClick={onClick}>
			<S.BurgerLine />
			<S.BurgerLine />
			<S.BurgerLine />
		</S.Burger>
	)
}

export default MyBurger
