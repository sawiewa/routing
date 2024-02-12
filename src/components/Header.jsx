import img1 from '../images/image_admin.jpg';
import img2 from '../images/image_calculator.jpg';
import img3 from '../images/image_contact.jpg';
import wrongPage from '../images/wrong.jpg';
import startPage from '../images/start.jpg';
import '../styles/Header.css';
// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderAuth from './HeaderAuth';
export default function Header() {
	const images = [img1, img2, img3, wrongPage, startPage];
	const time = 4000;

	const [imageActiveIndex, setImageActiveIndex] = useState(0);

	useEffect(() => {
		const IntervalId = setInterval(() => {
			if (imageActiveIndex === images.length - 1) {
				setImageActiveIndex(0);
				//console.log('ustawione index największy');
			} else {
				setImageActiveIndex(imageActiveIndex + 1);
			}
		}, time);
		return () => clearInterval(IntervalId);
	});

	return (
		<>
			<img src={images[imageActiveIndex]} alt='obrazek'></img>
			<HeaderAuth />
		</>

		// <Routes>
		// 	<Route path='/' element={<img src={startPage} alt='admin' />} />
		// 	<Route path='/contact' element={<img src={img3} alt='kontakt' />} />
		// 	<Route path='/products' element={<img src={img2} alt='products' />} />
		// 	<Route path='/admin' element={<img src={img1} alt='panel admina' />} />
		// 	<Route path='*' element={<img src={wrongPage} alt='wystąpił błąd' />} />
		// </Routes>
	);

	/* // <Routes>
	// 	<Route path='/' render={() => <img src={img2} alt='admin' exact />} />
	// 	<Route */
	/* // 		path='/admin'
	// 		render={() => <img src={img3} alt='admin'  />}
	// 	/>
	// 	<Route */
	/* // 		path='/constact'
	// 		render={() => <p>test header</p>}
	// 	/>
	// 	<Route */
	/* // 		path='/admin'
	// 		render={() => <img src={img3} alt='admin'  />}
	// 	/>
	// </Routes>
} */
}
