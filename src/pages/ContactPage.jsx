import { useState } from 'react';
import '../styles/Contact.css';
import { unstable_usePrompt as usePrompt } from 'react-router-dom';

const ContactPage = () => {
	const [stateContact, setStateContact] = useState('');
	//let [isBlocking, setIsBlocking] = useState(false);

	// usePrompt(
	// 	'Hello from usePrompt -- Are you sure you want to leave?',
	// 	isBlocking
	// );
	const handleChangeInput = (event) => {
		setStateContact(event.target.value);
		//setIsBlocking(event.target.value.length > 0);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setStateContact('');
	};
	console.log(stateContact);
	return (
		<div className='contact'>
			<form onSubmit={event => {
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
