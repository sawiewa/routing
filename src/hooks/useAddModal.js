import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

export function useAddModal(initialData) {
	const dispatch = useDispatch();
	const data = initialData;
	//console.log(data);
	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: data.id,
				title: data.title,
				description: data.description,
			})
		);
	};

	return { data, addModalToList };
}
