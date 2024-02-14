import { useState } from 'react';
import '../styles/Contact.css';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';

const ContactPage = () => {
	const [stateContact, setStateContact] = useState('');
	const modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'contact'
	);

	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleContact ${id}`,
		description: `descContact ${id}`,
		page: 'contact',
	};
	const handleChangeInput = (event) => {
		setStateContact(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setStateContact('');
	};
	console.log(stateContact);
	const { addModalToList, removeModal } = useAddModal('contact');
	const buttons = modalList.map((modal) => {
		return (
			<button
				id={modal.id}
				key={modal.id}
				page={modal.page}
				onClick={() => removeModal(modal.id)}>
				remove modal {modal.id} {modal.page}
			</button>
		);
	});
	return (
		<div className='contact'>
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
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
