import { useState } from "react";
import { Link } from "react-router-dom";
import GridUsuarios from "../../components/Grid/grid_usuarios";
import style from "./css/usuario-index.module.css";

function Usuario(){

    const [usuarioFiltro, setUsuarioFiltro] = useState();

    const handleUsuarioChange = (event: { target: { value: any } }) => {            
        setUsuarioFiltro(event.target.value);
      };  
          
    return (
        <form>
            <div className={style.AppStyle}>
                <div className={style.pesquisa}>
                    <label>Usuário:</label>
                    <input type="text"
                        className={style.textBox}
                        onChange={handleUsuarioChange} 
                        value={usuarioFiltro}>    
                    </input>
                    <Link to="/usuarios/adicionar/2" className={style.link}>Novo Usuário</Link>
                </div>                 
                <GridUsuarios nome={usuarioFiltro}></GridUsuarios>             
            </div>
        </form>
    );
}

export default Usuario;