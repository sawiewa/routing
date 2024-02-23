import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
import { useEffect, useState } from 'react';
export function useAddModal() {
	const dispatch = useDispatch();
	const [actualList, setActualList] = useState([]);
	console.log(actualList);

	//podejście nie zadziała ponieważ po kazdym dodaniu modala wywoływana jest funkcja czyszcząca,
	//gdyby tablica zależności była pusta to useEffect uruchomiłby się tylko po zamontowaniu i odmontowywaniu komponentu
	//w poniższym przykładzie tablica zależności jest uzupełniona, i kazde dodanie modala aktualizuje stan actualList z czym wiąże odpalenie czyszczenia i wszystko co dodane zostaje czyszczone
	useEffect(() => {
		return () => {
			actualList.forEach((modal) =>
				dispatch(modalActions.removeModalFromList(modal.id))
			);
		};
	}, [actualList, dispatch]);

	const addModalToList = (modal) => {
		setActualList([...actualList, modal]);
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
		actualList,
	};
}
