import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "../../components/grid";
import style from "./css/categoria-index.module.css";
import stylePesquisa from "./css/categoria-pesquisa.module.css";

function Categoria() {

    const [categoriaFiltro, setCategoriaFiltro] = useState();

    const handleCategoriaChange = (event: { target: { value: any } }) => {            
        setCategoriaFiltro(event.target.value);
      };  

    return (
        <form>
            <div className={style.AppStyle}>
                <div className={stylePesquisa.pesquisa}>
                    <label>Categoria:</label>
                    <input type="text" 
                        className={stylePesquisa.textBox} 
                        onChange={handleCategoriaChange} 
                        value={categoriaFiltro}>                    
                    </input>
                    <Link to="/categorias/adicionar/index" className={style.link}>Nova Categoria</Link>
                </div>                 
                <Grid nome={categoriaFiltro}></Grid>
            </div>
        </form>
    );
}

export default Categoria;