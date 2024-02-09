import Timer from '../components/Timer';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal';

const TimerPage = () => {
	const initialData = {
		id: 'idTimer',
		title: 'titleTimer',
		description: 'descTimer',
	};
	const { addModalToList } = useAddModal({
		id: initialData.id,
		title: initialData.title,
		description: initialData.description,
	});
	// const dispatch = useDispatch();

	// const addModalToList = () => {
	// 	dispatch(
	// 		modalActions.addModal({
	// 			id: 'idProduct',
	// 			title: 'titleModalProduct',
	// 			description: 'descriptionModalProduct',
	// 		})
	// 	);
	// };

	return (
		<>
			<Timer />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default TimerPage;
