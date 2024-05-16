import { useState } from "react";
import { Link } from "react-router-dom";
import GridComponent from "../../components/grid";
import style from "./css/categoria-index.module.css";

function Categoria() {

    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    

    const handleCategoriaChange = (event: { target: { value: any } }) => {            
        setCategoriaFiltro(event.target.value);
      };  

    console.log("🚀 ~ Categoria ~ categoriaFiltro:", categoriaFiltro);
        
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
                <GridComponent nome={categoriaFiltro} rotaEditar="/categorias/editar/index" ></GridComponent>
            </div>
        </form>
    );
}

export default Categoria;