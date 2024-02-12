import Timer from '../components/Timer';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal';

const TimerPage = () => {
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleTimer ${id}`,
		description: `descTimer ${id}`,
	};
	const { addModalToList, removeModal } = useAddModal();
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
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			<button onClick={() => removeModal(modalData.id)}>usuń modal</button>
		</>
	);
};

export default TimerPage;
