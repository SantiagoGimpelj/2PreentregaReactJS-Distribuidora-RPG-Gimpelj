import ItemCount from "../ItemCount/ItemCount";
import clas from "./ItemDetail.module.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className={clas.CardItem}>
      <header className={clas.Header}>
        <h2 className={clas.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={clas.ItemImg}/>
      </picture>
      <section>
        <p className={clas.Info}>Categoria: {category}</p>
        <p className={clas.Info}>Descripcion: {description}</p>
        <p className={clas.info}>Stock: {stock}</p>
        <p className={clas.Info}>Precio: ${price}</p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};
export default ItemDetail;
