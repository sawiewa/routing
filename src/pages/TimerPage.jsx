import Timer from '../components/Timer';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useRef } from 'react';
// import { timerActions } from '../store/timer-slice';

const TimerPage = () => {
	// const dispatch = useDispatch();
	// const time = useSelector((state) => state.timer.timer);
	// const isActive = useSelector((state) => state.timer.isActive);

	// useEffect(() => {
	// 	let timer;
	// 	if (!isActive) {
	// 		timer = setInterval(() => {
	// 			dispatch(timerActions.start(time));
	// 		}, 1000);
	// 	} else {
	// 		clearInterval(timer);
	// 	}
	// 	return () => clearInterval(timer);
	// }, [time]);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		handleCounter(timeToCounter);
	// 	}, 1000);
	// 	return () => clearInterval(timer);
	// }, [timeToCounter]);

	return <Timer />;
};

export default TimerPage;
