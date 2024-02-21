import Counter from '../components/Counter';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';

const CounterPage = () => {
	let modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'counter'
	);

	const { addModalToList, removeModal, setActualList, actualList } =
		useAddModal(modalList);
	const id = 10 + Math.floor(Math.random() * 900);

	const modalData = {
		id: id,
		title: `titleCountert ${id}`,
		description: `descCounter ${id}`,
		page: 'counter',
	};

	const addModal = (modal) => {
		addModalToList(modal);
		//modalList = actualList;
		setActualList(modalList);
	};
	console.log(modalList);
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
			<Counter />
			<button onClick={() => addModal(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default CounterPage;
