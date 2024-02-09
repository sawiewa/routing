// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal';

const ProductPage = () => {
	const initialData = {
		id: 'idProduct',
		title: 'titleProduct',
		description: 'descProduct',
	};
	const { addModalToList } = useAddModal({
		id: initialData.id,
		title: initialData.title,
		description: initialData.description,
	});
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
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default ProductPage;
