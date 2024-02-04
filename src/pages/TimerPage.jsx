import Timer from '../components/Timer';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

const TimerPage = () => {
	const dispatch = useDispatch();

	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: 'idProduct',
				title: 'titleModalProduct',
				description: 'descriptionModalProduct',
			})
		);
	};

	return (
		<>
			<Timer />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default TimerPage;
