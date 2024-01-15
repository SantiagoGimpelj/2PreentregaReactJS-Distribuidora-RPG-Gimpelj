import { useEffect, useState } from "react"
import { getProductById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import clas from "./ItemDetailContainer.module.css"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className={clas.box}>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer