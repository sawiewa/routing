import Auth from '../components/Auth.js';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

const AdminPage = () => {
	const dispatch = useDispatch();

	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: 'idAdmin',
				title: 'titleModalAdmin',
				description: 'descriptionModalAdmin',
			})
		);
		//console.log(title);
		//console.log(showList);
	};

	return (
		<>
			<Auth />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default AdminPage;
