import { ARTICLES } from '../pages/data.js';
import Article from '../components/Article.jsx';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { addModalToList, removeModal } = useAddModal('home');
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
			<button onClick={() => addModalToList(modalData)}>Dodaj modal</button>
			{buttons}
			<div className='home'>{artList}</div>
		</>
	);
};

export default HomePage;
