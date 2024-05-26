import { useState } from "react";
import { Link } from "react-router-dom";
import GridPautas from "../../components/Grid/grid_pautas";
import style from "./css/pauta-index.module.css";

function Pauta() {

    const [pautaFiltro, setPautaFiltro] = useState();

    const handlePautaChange = (event: { target: { value: any } }) => {            
        setPautaFiltro(event.target.value);
      };  

    return (
        <form>
            <div className={style.AppStyle}>
                <div className={style.pesquisa}>
                    <label>Pauta:</label>
                    <input type="text"
                        className={style.textBox}
                        onChange={handlePautaChange} 
                        value={pautaFiltro}>    
                    </input>
                    <Link to="/pautas/adicionar/2" className={style.link}>Nova Pauta</Link>
                </div>                 
                <GridPautas nome={pautaFiltro}></GridPautas>             
            </div>
        </form>        
    );
}

export default Pauta;