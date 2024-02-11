// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal';

const ProductPage = () => {


	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleProduct ${id}`,
		description: `descProduct ${id}`,
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
			<button onClick={() => removeModal(modalData.id)}>usuń modal</button>
		</>
	);
};

export default ProductPage;
