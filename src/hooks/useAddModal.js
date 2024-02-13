import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
import { useEffect } from 'react';

export function useAddModal() {
	const dispatch = useDispatch();
	//console.log(data);

	useEffect(() => {

		return () => dispatch(modalActions.removeAllModalFromList());
	}, []);

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

	return { addModalToList, removeModal };
}
