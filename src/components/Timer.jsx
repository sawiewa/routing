import { useSelector, useDispatch } from 'react-redux';
import { timerActions } from '../store/timer-slice';
import { useEffect, useState } from 'react';
import Modal from './Modal';

export default function Timer({ title }) {
	const dispatch = useDispatch();
	const time = useSelector((state) => state.timer.timer);
	const initialTime = useSelector((state) => state.timer.initialTime);
	const isActive = useSelector((state) => state.timer.isActive);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleStartAgain = () => {
		dispatch(timerActions.startAgain());
		console.log('jeszcze raz');
	};
	const handleStop = () => {
		setModalIsOpen(true);
		dispatch(timerActions.stopTimer(time));
	};
	const closeModal = () => {
		setModalIsOpen(false);
		if (time === 0) {
			dispatch(timerActions.startAgain());
		} else {
			dispatch(timerActions.startContinue(time));
		}
	};
	useEffect(() => {
		let timer;
		if (isActive) {
			timer = setInterval(() => {
				dispatch(timerActions.start(time));
			}, 1000);
		}
		if (!isActive & (time === 0)) {
			setModalIsOpen(true);
			dispatch(timerActions.stopTimer(time));
		}
		return () => {
			clearInterval(timer);
			console.log('clear interval PO use ef, z returna');
		};
	}, [time, dispatch, isActive]);

	return (
		<>
			<Modal open={modalIsOpen}>
				<div>
					Odliczanie zostało zatrzymane, kliknij "Zamknij" aby kontynuować
				</div>
				<button onClick={closeModal}>zamknij</button>
			</Modal>
			<p>{title}</p>
			<p>Odliczamy od {initialTime}</p>
			<p>odliczono {initialTime - time}</p>
			<p>Pozostały czas {time}</p>
			<p>{time === 0 && 'koniec odliczania'}</p>
			<button onClick={handleStop}>{isActive ? 'STOP' : 'Zatrzymano'}</button>
			<button onClick={handleStartAgain}>RESET zacznij od nowa</button>
		</>
	);
}
