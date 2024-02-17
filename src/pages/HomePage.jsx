import { ARTICLES } from '../pages/data.js';
import Article from '../components/Article.jsx';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';
import ModalNew from '../components/ModalNew.jsx';
//import { modalActions } from '../store/modal-slice.js';

const HomePage = () => {
	const { addModalToList, removeModal, removeAllModals } = useAddModal('home');
	const modalList = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'home'
	);
	console.log(modalList);

	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `homePageTitle ${id}`,
		description: `deschomePage ${id}`,
		page: 'home',
	};

	const handleModal = (modal) => {
		console.log(`zmodala ${modal}`);
		removeModal(modal);
	};

	const openModal = (modalData) => {
		addModalToList(modalData);
	};
	// const buttons = modalList.map((modal) => {
	// 	return (
	// 		<button
	// 			id={modal.id}
	// 			key={modal.id}
	// 			page={modal.page}
	// 			onClick={() => removeModal(modal.id)}>
	// 			remove modal {modal.id} {modal.page}
	// 		</button>
	// 	);
	// });

	const modals = modalList.map((modal) => {
		return (
			<ModalNew
				key={modal.id}
				title={modal.title}
				description={modal.description}
				removeModal={() => handleModal(modal.id)}
				removeAllModals={() => removeAllModals(modal.page)}></ModalNew>
		);
	});

	const artList = ARTICLES.map((article) => (
		<Article
			key={article.id}
			title={article.title}
			author={article.author}
			text={article.text}
		/>
	));
	return (
		<>
			<button onClick={() => openModal(modalData)}>Dodaj modal</button>
			{/* {buttons} */}
			{modals}
			<div className='home'>{artList}</div>
		</>
	);
};

export default HomePage;
