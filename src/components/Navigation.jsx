import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
const list = [
	{ name: 'Strona główna', path: '/', exact: 'true' },
	{ name: 'Produkty', path: '/products' },
	{ name: 'Kontakt', path: '/contact' },
	{ name: 'Panel admina', path: '/admin' },
	{ name: 'Timer', path: '/timer' },
];

export default function Navigation() {
	return (
		<nav className='main'>
			<ul>
				{list.map((el) => {
					return (
						<li key={el.name}>
							<NavLink to={el.path} exact={el.exact ? el.exact : 'false'}>
								{el.name}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
