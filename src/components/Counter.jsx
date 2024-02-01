import { useSelector, useDispatch } from 'react-redux';
import classes from '../styles/Counter.module.css';
import { counterActions } from '../store/counter-slice';
const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter); //wyodrebniamy stan którego chcemy używac, te funkcje wykona dla nas React redux nastepnie przekaze stan Redux
	const show = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const increaseHandler = () => {
		//dispatch({ type: 'increase', amount: 5 }); zamiast tego wszedzie wskazujemy na
		dispatch(counterActions.increase(5));
	};
	const decrementHandler = () => {
		//dispatch({ type: 'decrement' });
		dispatch(counterActions.decrement());
	};
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}

			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increaseHandler}>increase by 5</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
