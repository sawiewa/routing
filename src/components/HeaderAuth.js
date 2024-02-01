import classes from '../styles/HeaderAuth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const HeaderAuth = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	//const logout = useSelector((state) => state.isAuthenticated);

	const logoutHandled = (event) => {
		dispatch(authActions.logout());
		//event.preventDefault();
	};
	return (
		<header className={classes.header}>
			<h1>Auth</h1>
			{isAuth && (
				<>
					<nav>
						<ul>
							<button onClick={logoutHandled}>Logout</button>
						</ul>
					</nav>
				</>
			)}
		</header>
	);
};

export default HeaderAuth;
