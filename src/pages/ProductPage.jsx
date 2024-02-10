// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal';

const ProductPage = () => {
	const randomId = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: randomId,
		title: `titleProduct ${randomId}`,
		description: `descProduct ${randomId}`,
	};
	const { addModalToList, removeModal } = useAddModal();
	// const dispatch = useDispatch();

	// const addModalToList = () => {
	// 	dispatch(
	// 		modalActions.addModal({
	// 			id: 'idProduct',
	// 			title: 'titleModalProduct',
	// 			description: 'descriptionModalProduct',
	// 		})
	// 	);
	// };
	return (
		<>
			<div>prod</div>
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			<button onClick={() => removeModal(modalData)}>
				usuń modal
			</button>
		</>
	);
};

export default ProductPage;
