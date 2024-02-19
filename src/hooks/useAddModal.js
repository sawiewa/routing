import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
import { useEffect, useState } from 'react';
export function useAddModal(modals) {
	const dispatch = useDispatch();
	const [actualList, setActualList] = useState(modals);
	//console.log(actualList);
	
	useEffect(() => {
		
		return () => {
			
			dispatch(modalActions.removeAllModalFromList(actualList));
		};
	}, []);

	const addModalToList = (modal) => {
		dispatch(
			modalActions.addModal({
				id: modal.id,
				title: modal.title,
				description: modal.description,
				page: modal.page,
			}),
		);
	};

	const removeModal = (id) => {
		dispatch(modalActions.removeModalFromList(id));
	};
	const removeAllModals = (modal) => {
		dispatch(modalActions.removeAllModalFromListInPage(modal));
		console.log('probuje usunąć ' + modal);
	};

	return { addModalToList, removeModal, removeAllModals };
}
