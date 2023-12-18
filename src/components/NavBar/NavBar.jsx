import clas from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className={clas.nav}>
            <h1 className={clas.logo}>Distribuidora RPG</h1>
            <section>
                <button>Cerraduras</button>
                <button>Candados</button>
                <button>Caja Fuertes</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar
