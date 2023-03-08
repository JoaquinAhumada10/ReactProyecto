import styles from "./cartwidget.css";
import cartIcon from "./cart-icon.png";


const CartWidget = ({ cartItemsCount }) => {
  return (

    <div className={styles.container}>

      <img src={cartIcon} alt="Cart" className={styles.icon} />
      {cartItemsCount > 0 && (
        <span className={styles.itemCount}>{cartItemsCount}</span>
      )}

    </div>
  );
}

export default CartWidget;