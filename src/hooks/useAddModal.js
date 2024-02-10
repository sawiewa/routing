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

	const removeModal = (modalData) => {
		dispatch(
			modalActions.removeModalFromList({
				id: modalData.id,
				title: modalData.title,
				description: modalData.description,
			})
		);
	};

	return { addModalToList, removeModal };
}
