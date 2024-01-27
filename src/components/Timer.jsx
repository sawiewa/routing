import { useState, useEffect } from 'react';

export default function Timer({ title }) {
	const [timeToCounter, setTimeToCounter] = useState('');
	const [timeEnd, setTimeEnd] = useState(false);
	const handleInputChange = (event) => {
		setTimeToCounter(event.target.value);
	};
	const handleCounter = (timeToCounter) => {
		if (timeToCounter > 0) {
			setTimeToCounter((oldCount) => oldCount - 1);
		} else if (timeToCounter === 0) {
			setTimeEnd(true);
		}
	};

	const handleReset = () => {
		setTimeEnd(true);
	};
	const handleStart = () => {
		setTimeEnd(false);
	};

	useEffect(() => {
		let timer;
		if (!timeEnd) {
			timer = setInterval(() => {
				handleCounter(timeToCounter);
			}, 1000);
		} else {
			clearInterval(timer);
		}
		return () => clearInterval(timer);
	}, [timeToCounter, timeEnd]);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		handleCounter(timeToCounter);
	// 	}, 1000);
	// 	return () => clearInterval(timer);
	// }, [timeToCounter]);

	return (
		<>
			<p>{title}</p>
			<p>
				<label>Wprowadź czas do odliczania</label>
				<input
					type='number'
					onChange={handleInputChange}
					value={timeToCounter}
				/>
			</p>
			<button onClick={handleReset}>{timeEnd ? 'Zatrzymano' : 'STOP'}</button>
			<p>Pozostały czas {timeToCounter}</p>
			<p>{timeEnd && 'koniec odliczania'}</p>

			<button onClick={handleStart}>
				{!timeEnd ? 'Trwa odliczanie' : 'Odliczaj ponownie'}
			</button>
			{timeToCounter === 0 && 'wprowadź nową wartość > 0'}
		</>
	);
}
