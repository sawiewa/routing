import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
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
