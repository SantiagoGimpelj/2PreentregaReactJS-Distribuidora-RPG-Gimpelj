import clas from "./ItemListContainer.module.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className={clas.h1}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer