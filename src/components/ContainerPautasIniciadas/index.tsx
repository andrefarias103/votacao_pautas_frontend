import React from "react";
import style from "./ContainerPautasIniciadas.module.scss";

class ContainerPautasIniciadas extends React.Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.area_categoria}>
                    <label className={style.label_categoria}> [Descricao Categoria] </label>
                    <button className={style.botao}> Iniciada </button>
                </div>
                <div className={style.label_pauta}><label> [Descricao Pauta] </label></div>
                <div className={style.sessao}>
                    <div className={style.abertura_sessao}>
                        <label className={style.abertura_sessao_titulo}> Abertura Sessão: </label>
                        <label className={style.abertura_sessao_valor}> [Data/Hora Abertura Sessão] </label>
                    </div>
                    <div className={style.fechamento_sessao}>
                        <label className={style.fechamento_sessao_titulo}> Fechamento Sessão: </label>
                        <label className={style.fechamento_sessao_valor}> [Data/Hora Fechamento Sessão] </label>
                    </div>                    
                </div>
                <div className={style.label_resultado}>
                    <label> Resultado: </label>
                    <label> [0 votos] </label>
                </div>
            </div>
        );
    }
}

export default ContainerPautasIniciadas;