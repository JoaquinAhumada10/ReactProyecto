import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import CartWidget from '../CartWidget';

const Navbar = () => {
	let activeStyle = {
		color: 'blue',
		textDecoration: 'none',
	};
	let noActiveStyle = {
		textDecoration: 'none',
	};
	return (
		<nav className={styles.container}>
			<NavLink
				to="/"
				style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
			>
				<h1>BigsSneakers</h1>
			</NavLink>

			<ul>
				<li>
					<NavLink
						to="/"
						style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
					>
						<p>Inicio</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/productos"
						style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
					>
						<p> Productos</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/categorias"
						style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
					>
						<p>Categorias</p>
					</NavLink>
				</li>

				<li>
					<NavLink to="/cart">
						<CartWidget />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
