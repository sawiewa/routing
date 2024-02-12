import Auth from '../components/Auth.js';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';
const AdminPage = () => {
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleAdmin ${id}`,
		description: `descAdmin ${id}`,
	};
	const { addModalToList, removeModal } = useAddModal();

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
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			<button onClick={() => removeModal(modalData.id)}>usuń modal</button>
		</>
	);
};

export default AdminPage;
