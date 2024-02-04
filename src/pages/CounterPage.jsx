import Counter from '../components/Counter';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';

const CounterPage = () => {
	const dispatch = useDispatch();

	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: 'idCounter',
				title: 'titleModalCounter',
				description: 'descriptionModalCounter',
			})
		);
		//console.log(title);
		//console.log(showList);
	};

	return (
		<>
			<Counter />
			<button onClick={addModalToList}>Dodaj modal</button>
		</>
	);
};

export default CounterPage;
