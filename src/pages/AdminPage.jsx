import Auth from '../components/Auth.js';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';
const AdminPage = () => {
	const modalList = useSelector((state) => state.modal.modals);
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleAdmin ${id}`,
		description: `descAdmin ${id}`,
		page: 'admin',
	};
	const { addModalToList, removeModal } = useAddModal();
	const buttons = modalList.map((modal) => {
		if (modal.page === 'admin') {
			return (
				<button
					id={modal.id}
					key={modal.id}
					page={modal.page}
					onClick={() => removeModal(modal.id)}>
					remove modal {modal.id} {modal.page}
				</button>
			);
		}
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
