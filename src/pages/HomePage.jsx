import { ARTICLES } from '../pages/data.js';
import Article from '../components/Article.jsx';

const HomePage = () => {
	const artList = ARTICLES.map((article) => (
		<Article
			key={article.id}
			title={article.title}
			author={article.author}
			text={article.text}
		/>
	));
	return <div className='home'>{artList}</div>;
};

export default HomePage;
