import Timer from '../components/Timer';
import { useAddModal } from '../hooks/useAddModal';
import { useSelector } from 'react-redux';

const TimerPage = () => {
	const { addModalToList, removeModal } = useAddModal('timer');
	const modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'timer'
	);

	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleTimer ${id}`,
		description: `descTimer ${id}`,
		page: 'timer',
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
			<Timer />
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default TimerPage;
