import clas from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={clas.nav}>
      <Link to="/">
        <h1 className={clas.logo}>Distribuidora RPG</h1>
      </Link>
      <section>
        <NavLink to={`/category/cerradura`} className={clas.categorias}>
          Cerraduras
        </NavLink>
        <NavLink to={`/category/candado`} className={clas.categorias}>
          Candados
        </NavLink>
        <NavLink to={`/category/cajafuerte`} className={clas.categorias}>
          Caja fuerte
        </NavLink>
      </section>
      {/* <NavLink to={`/category/cerradura`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Cerraduras</NavLink>
        <NavLink to={`/category/candado`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Candados</NavLink>
        <NavLink to={`/category/cajafuerte`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Caja fuerte</NavLink> */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
