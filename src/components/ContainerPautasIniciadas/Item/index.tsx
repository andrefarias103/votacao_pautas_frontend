import Botao from "../../Botao";
import style from "./Item.module.scss";

function Item ( props : { children?: React.ReactNode,  categoria: string, tituloPauta: string, aberturaSessao: string, fechamentoSessao: string} ) {
    const { categoria, tituloPauta, aberturaSessao, fechamentoSessao } = props;
    return (
        <div className={style.container}>
            <div className={style.area_categoria}>
                <label className={style.label_categoria}> {categoria} </label>
                <Botao>Iniciada</Botao>
            </div>
            <div className={style.label_pauta}><label> {tituloPauta} </label></div>
            <div className={style.sessao}>
                <div className={style.abertura_sessao}>
                    <label className={style.abertura_sessao_titulo}> Abertura Sessão: </label>
                    <label className={style.abertura_sessao_valor}> { aberturaSessao } </label>
                </div>
                <div className={style.fechamento_sessao}>
                    <label className={style.fechamento_sessao_titulo}> Fechamento Sessão: </label>
                    <label className={style.fechamento_sessao_valor}> { fechamentoSessao } </label>
                </div>                    
            </div>
            <div className={style.label_resultado}>
                <label> Resultado: </label>
                <label> [0 votos] </label>
            </div>
        </div>
     )
}

export default Item;