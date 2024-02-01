import classes from '../styles/Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Auth = () => {
	const dispatch = useDispatch();
	//const isAuth = useSelector((state) => state.auth.isAuthenticated);

	const authHandler = (event) => {
		dispatch(authActions.login());
		event.preventDefault();
	};

	return (
		<main className={classes.auth}>
			<section>
				<form>
					<div className={classes.control}>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' />
					</div>
					<div className={classes.control}>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' />
					</div>
					<button onClick={authHandler}>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
