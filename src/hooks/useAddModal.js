import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
import { useEffect } from 'react';

export function useAddModal() {
	const dispatch = useDispatch();
	//console.log(data);
	const addModalToList = (modalData) => {
		dispatch(
			modalActions.addModal({
				id: modalData.id,
				title: modalData.title,
				description: modalData.description,
				page: modalData.page,
			})
		);
	};

	const removeModal = (id) => {
		dispatch(modalActions.removeModalFromList(id));
	};

	const removeAllModals = (page) => {
			dispatch(modalActions.removeAllModalFromList(page));
		};

	return { addModalToList, removeModal,removeAllModals };
}
