import { useAddModal } from '../hooks/useAddModal';
import { useSelector } from 'react-redux';

const ProductPage = () => {
	const modalList = useSelector((state) => state.modal.modals);
	console.log(modalList);
	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleProduct ${id}`,
		description: `descProduct ${id}`,
		page: 'product',
	};
	const { addModalToList, removeModal } = useAddModal();
	const buttons = modalList.map((modal) => {
		if (modal.page === 'product') {
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
			<div>prod</div>
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default ProductPage;
