import { useState } from "react";
import { Link } from "react-router-dom";
import GridCategoria from "../../components/Grid/grid_categorias";
import style from "./css/categoria-index.module.css";

function Categoria() {

    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    
    const handleCategoriaChange = (event: { target: { value: any } }) => {            
        setCategoriaFiltro(event.target.value);
      };  
        
    return (
        <form>
            <div className={style.AppStyle}>
                <div className={style.pesquisa}>
                    <label>Categoria:</label>
                    <input type="text" 
                        className={style.textBox} 
                        onChange={handleCategoriaChange} 
                        value={categoriaFiltro}>                    
                    </input>
                    <Link to="/categorias/adicionar/index" className={style.link}>Nova Categoria</Link>
                </div>      
                <GridCategoria nome={categoriaFiltro} ></GridCategoria>
            </div>
        </form>
    );
}

export default Categoria;