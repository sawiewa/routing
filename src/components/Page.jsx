import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import TimerPage from '../pages/TimerPage';
import CounterPage from '../pages/CounterPage';

export default function Page() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route path='/contact' element={<ContactPage />}></Route>
			<Route path='/products' element={<ProductPage />}></Route>
			<Route path='/admin' element={<AdminPage />}></Route>
			<Route path='/timer' element={<TimerPage />}></Route>
			<Route path='/counter' element={<CounterPage />}></Route>
			<Route path='*' element={<ErrorPage />}></Route>
		</Routes>
	);
}
