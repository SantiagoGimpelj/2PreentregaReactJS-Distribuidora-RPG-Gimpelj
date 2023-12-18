import cart from "./assets/carrito.jpg";
import clas from "./CartWidget.module.css"
const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className={clas.carrito}>
      <img src={cart} alt="cart-widget" className={clas.img}/>
      <span className={clas.num}>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
