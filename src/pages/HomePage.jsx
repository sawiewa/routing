import { ARTICLES } from '../pages/data.js';
import Article from '../components/Article.jsx';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modal-slice.js';
const HomePage = () => {
	const dispatch = useDispatch();

	const addModalToList = () => {
		dispatch(
			modalActions.addModal({
				id: 'idHome',
				title: 'titleModalHome',
				description: 'descriptionModalHome',
			})
		);
		//console.log(title);
		//console.log(showList);
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
			<button onClick={addModalToList}>Dodaj modal</button>
			<div className='home'>{artList}</div>
		</>
	);
};

export default HomePage;
