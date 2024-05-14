import React from "react";
import style from "./menu.module.css";

class Menu extends React.Component {
    render() {
        return (
            <nav id="menu" className={style.menu}> 
                <ul className={style.ul}> 
                    <li className={style.li}><a href="admin">Administrativo     </a> | </li>
                    <li className={style.li}><a href="admin">Escolher Pauta     </a> | </li>
                    <li className={style.li}><a href="admin">Votar     </a> | </li>
                    <li className={style.li}><a href="admin">Detalhes     </a> </li>
                </ul> 
            </nav>
        );
    }
}
export default Menu;