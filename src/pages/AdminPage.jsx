import Auth from '../components/Auth.js';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';
const AdminPage = () => {
	const { addModalToList, removeModal } = useAddModal();
	const modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'admin'
	);
	const URL = 'http://localhost:3000/admin';

	console.log(modalList);

	const id = 10 + Math.floor(Math.random() * 900);

	const modalData = {
		id: id,
		title: `titleAdmin ${id}`,
		description: `descAdmin ${id}`,
		page: 'admin',
	};

	const buttons = modalList.map((modal) => {
		return (
			<button
				id={modal.id}
				key={modal.id}
				page={modal.page}
				onClick={() => removeModal(modal.id)}>
				remove modal {modal.id} {modal.page}
			</button>
		);
	});

	return (
		<>
			<Auth />
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default AdminPage;
