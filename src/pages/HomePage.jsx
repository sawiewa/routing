import { ARTICLES } from '../pages/data.js';
import Article from '../components/Article.jsx';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../store/modal-slice.js';
import { useAddModal } from '../hooks/useAddModal.js';
import { useSelector } from 'react-redux';
const HomePage = () => {
	const modalList = useSelector((state) => state.modal.modals);
	console.log(modalList);
	const { addModalToList, removeModal } = useAddModal();
	const buttons = modalList.map((modal) => (
		<button id={modal.id} key={modal.id} onClick={() => removeModal(modal.id)}>
			remove modal id = {modal.id}
		</button>
	));

	// const dispatch = useDispatch();

	// const addModalToList = () => {
	// 	dispatch(
	// 		modalActions.addModal({
	// 			id: 'idHome',
	// 			title: 'titleModalHome',
	// 			description: 'descriptionModalHome',
	// 		})
	// 	);

	// };

	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleProduct ${id}`,
		description: `descProduct ${id}`,
	};

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
			{/* <button onClick={() => removeModal(modalData.id)}>usuń modal</button> */}
			<div className='home'>{artList}</div>
		</>
	);
};

export default HomePage;
