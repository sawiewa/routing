import { useSelector, useDispatch } from 'react-redux';
import { timerActions } from '../store/timer-slice';
import { useEffect } from 'react';

export default function Timer({ title }) {
	const dispatch = useDispatch();
	const time = useSelector((state) => state.timer.timer);
	const initialTime = useSelector((state) => state.timer.initialTime);
	const isActive = useSelector((state) => state.timer.isActive);
	const handleStartAgain = () => {
		dispatch(timerActions.startAgain());
		console.log('jeszcze raz');
	};
	const handleStart = () => {
		dispatch(timerActions.startContinue(time));
		console.log('kontynujesz odliczanie');
	};
	const handleStop = () => {
		dispatch(timerActions.stopTimer(time));
		console.log('zatrzymales odliczanie');
	};

	useEffect(() => {
		let timer;
		if (isActive) {
			timer = setInterval(() => {
				dispatch(timerActions.start(time));
			}, 1000);
		}
		return () => {
			clearInterval(timer);
			//dispatch(timerActions.startAgain(time));
			console.log('clear interval PO use ef, z returna');
		};
	}, [time, dispatch, isActive]);

	return (
		<>
			<p>{title}</p>
			<p>Odliczamy od {initialTime}</p>
			<p>odliczono {initialTime-time}</p>
			<p>Pozostały czas {time}</p>
			<p>{time === 0 && 'koniec odliczania'}</p>

			<button onClick={handleStart}>
				{isActive ? 'odliczanie trwa' : 'START'}
			</button>
			<button onClick={handleStop}>{isActive ? 'STOP' : 'Zatrzymano'}</button>
			<button onClick={handleStartAgain}>RESET</button>
			<p>{time === 0 && 'wprowadź nową wartość'} </p>
		</>
	);
}
