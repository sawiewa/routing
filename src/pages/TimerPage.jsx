import Timer from '../components/Timer';
import { useAddModal } from '../hooks/useAddModal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const TimerPage = () => {
	const { addModalToList, removeModal, removeAllModals } = useAddModal();
	const modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'timer'
	);
	const modalListAll = useSelector((state) => state.modal.modals);
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleTimer ${id}`,
		description: `descTimer ${id}`,
		page: 'timer',
	};
	useEffect(() => {
		modalListAll.map((modal) => {
			return removeAllModals(modal.page);
		});
	}, []);
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
