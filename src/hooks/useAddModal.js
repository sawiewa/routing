import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
export function useAddModal() {
	const dispatch = useDispatch();
	//const modals = useSelector((state) => state.modal.modals);
	const [actualList, setActualList] = useState({});
	console.log(actualList);
	const actualLength = actualList.length;
	useEffect(() => {
		// dispatch(modalActions.removeModalFromList(actualList.id));
		//setActualList();

		return () => {
			for (let i = 0; i < actualLength; i++) {
				removeModal();
			}
			for (let i = 0; i < actualLength; i++) {
				console.log('usuwanie z actual list');
			}

			// return () => {
			// 	dispatch(modalActions.removeAllModalFromList({ actualList }));
			// 	console.log({ actualList });
			// };
		};
	}, []);

	const addModalToList = (modal) => {
		dispatch(
			modalActions.addModal({
				id: modal.id,
				title: modal.title,
				description: modal.description,
				page: modal.page,
			})
		);
	};

	const removeModal = (id) => {
		dispatch(modalActions.removeModalFromList(id));
	};
	const removeAllModals = (modal) => {
		dispatch(modalActions.removeAllModalFromListInPage(modal));
		console.log('probuje usunąć ' + modal);
	};

	return {
		addModalToList,
		removeModal,
		removeAllModals,
		setActualList,
		actualList,
	};
}
