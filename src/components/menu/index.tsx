import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AutenticacaoContexto } from "../../contexto/autenticacao/autenticacaoContexto";
import style from "./menu.module.css";

const Menu: React.FC = () => {    

    const navigate = useNavigate();

    const autenticacao = useContext(AutenticacaoContexto);
    const handleLogout = async () => {
        await autenticacao.logout();
        navigate('/');
    } 

    return (
        <nav id="menu" className={style.menu}> 
            <ul className={style.ul}> 
                <li className={style.li}><a href="admin">Administrativo     </a> | </li>
                <li className={style.li}><a href="admin">Escolher Pauta     </a> | </li>
                <li className={style.li}><a href="admin">Votar     </a> | </li>
                <li className={style.li}><a href="admin">Detalhes     </a></li>
                {autenticacao.usuario && <li className={style.li}><a href="/" onClick={handleLogout}> | Sair     </a> </li>}
                
            </ul> 
        </nav>
    );

}
export default Menu;