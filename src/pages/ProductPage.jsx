import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

const ProductPage = () => {
	const dispatch = useDispatch();

	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: 'idProduct',
				title: 'titleModalProduct',
				description: 'descriptionModalProduct',
			})
		);
	};
	return (
		<>
			<div>prod</div>
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default ProductPage;
