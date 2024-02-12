import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

export function useAddModal() {
	const dispatch = useDispatch();
	//console.log(data);
	const addModalToList = (modalData) => {
		dispatch(
			modalActions.addModal({
				id: modalData.id,
				title: modalData.title,
				description: modalData.description,
			})
		);
	};

	const removeModal = (id) => {
		dispatch(
			modalActions.removeModalFromList(
				id
				// title: modal.title,
				// description: modal.description,
			)
		);
	};

	return { addModalToList, removeModal };
}
