import styles from "./navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return( 

  <nav className={styles.container}>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Sobre nosotros</a></li>
      <li><a href="#">Contacto</a></li>
      <BsFillCartFill />
      <p>2</p>
    </ul>
  </nav>
  
  );
}

export default Navbar