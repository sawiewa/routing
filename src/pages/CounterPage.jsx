import Counter from '../components/Counter';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';
const CounterPage = () => {
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleCountert ${id}`,
		description: `descCounter ${id}`,
	};
	const { addModalToList, removeModal } = useAddModal();
	// const dispatch = useDispatch();

	// const addModalToList = () => {
	// 	dispatch(
	// 		modalActions.addModal({
	// 			id: 'idCounter',
	// 			title: 'titleModalCounter',
	// 			description: 'descriptionModalCounter',
	// 		})
	// 	);

	// };

	return (
		<>
			<Counter />
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			<button onClick={() => removeModal(modalData.id)}>usuń modal</button>
		</>
	);
};

export default CounterPage;
