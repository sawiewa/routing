import Counter from '../components/Counter';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';
const CounterPage = () => {
	const modalList = useSelector((state) => state.modal.modals);
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleCountert ${id}`,
		description: `descCounter ${id}`,
		page: 'counter',
	};
	const { addModalToList, removeModal } = useAddModal();

	const buttons = modalList.map((modal) => {
		if (modal.page === 'counter') {
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
			<Counter />
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default CounterPage;
