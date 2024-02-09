import { useState } from 'react';
import '../styles/Contact.css';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';

const ContactPage = () => {
	const [stateContact, setStateContact] = useState('');
	const initialData = {
		id: 'idContact',
		title: 'titleContact',
		description: 'descContact',
	};

	const handleChangeInput = (event) => {
		setStateContact(event.target.value);
		//setIsBlocking(event.target.value.length > 0);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setStateContact('');
	};
	console.log(stateContact);
	const { addModalToList } = useAddModal({
		id: initialData.id,
		title: initialData.title,
		description: initialData.description,
	});

	// const dispatch = useDispatch();

	// const addModalToList = () => {
	// 	dispatch(
	// 		modalActions.addModal({
	// 			id: 'idContact',
	// 			title: 'titleModalContact',
	// 			description: 'descriptionModalContact',
	// 		})
	// 	);
	//console.log(title);
	//console.log(showList);
	//};
	return (
		<div className='contact'>
			<button onClick={(data) => addModalToList(data)}>DodajModal</button>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					event.target.reset();
					//setIsBlocking(false);
				}}>
				<h3>Skontaktuj się z nami</h3>
				<textarea
					value={stateContact}
					placeholder='Wpisz wiadomość'
					onChange={handleChangeInput}></textarea>
				<button onClick={handleSubmit}>Wyślij</button>
			</form>
		</div>
	);
};

export default ContactPage;
