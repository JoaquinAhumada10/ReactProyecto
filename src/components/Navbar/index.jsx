import CartWidget from "../CartWidget";
import styles from "./navbar.module.css";


const Navbar = () => {
  return( 

  <nav className={styles.container}>
    <h1>BigsSneakers</h1>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Sobre nosotros</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <CartWidget cartItemsCount={3}/>
  </nav>
  
  );
}

export default Navbar