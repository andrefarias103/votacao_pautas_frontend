import React from "react";
import style from "./FiltroPesquisa.module.scss";

class FiltroPesquisa extends React.Component {
    render() {  
        return <div className={style.filtro}>
            <label> Filtrar por Categoria: </label>
            <select name="filtro">
                <option value="opcao1">Pautas para Reuniões de Condomínio</option>
            </select>
        </div>
    }
}

export default FiltroPesquisa;