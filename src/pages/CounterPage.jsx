import Counter from '../components/Counter';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';
const CounterPage = () => {
	const initialData = {
		id: 'idCounter',
		title: 'titleCounter',
		description: 'descCounter',
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
	// 			id: 'idCounter',
	// 			title: 'titleModalCounter',
	// 			description: 'descriptionModalCounter',
	// 		})
	// 	);

	// };

	return (
		<>
			<Counter />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default CounterPage;
