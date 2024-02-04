import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
	const showList = useSelector((state) => state.modal.modals);
	console.log(showList);
	return (
		<BrowserRouter>
			<div className='app'>
				<header>{<Header />}</header>
				<main>
					<aside>{<Navigation />}</aside>
					<section className='page'>{<Page />}</section>
				</main>

				<footer>{<Footer />}</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
