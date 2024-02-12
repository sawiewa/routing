import Timer from '../components/Timer';
import { useAddModal } from '../hooks/useAddModal';
import { useSelector } from 'react-redux';

const TimerPage = () => {
	const modalList = useSelector((state) => state.modal.modals);
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleTimer ${id}`,
		description: `descTimer ${id}`,
		page: 'timer',
	};
	const { addModalToList, removeModal } = useAddModal();
	const buttons = modalList.map((modal) => {
		if (modal.page === 'timer') {
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
			<Timer />
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default TimerPage;
