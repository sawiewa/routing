import Auth from '../components/Auth.js';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';
const AdminPage = () => {
	const initialData = {
		id: 'idAdmin',
		title: 'titleAdmin',
		description: 'descAdmin',
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
	// 			id: 'idAdmin',
	// 			title: 'titleModalAdmin',
	// 			description: 'descriptionModalAdmin',
	// 		})
	// 	);

	//};

	return (
		<>
			<Auth />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default AdminPage;
