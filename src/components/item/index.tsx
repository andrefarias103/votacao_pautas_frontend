import Botao from "../botao";
import style from "./item.module.css";

function Item ( props : { children?: React.ReactNode,  titulo: string, tituloPauta: string, aberturaSessao: string, fechamentoSessao: string, quantidadeVotos: string} ) {
    const { titulo, tituloPauta, aberturaSessao, fechamentoSessao, quantidadeVotos } = props;
    return (
        <div className={style.container}>
            <div className={style.area_categoria}>
                <div>
                    <label className={style.label_categoria}> {titulo} </label>
                    <div className={style.label_pauta}><label> {tituloPauta} </label></div>
                </div>
                <Botao>Iniciada</Botao>
            </div>
            <div className={style.sessao}>
                <div>
                    <div className={style.abertura_sessao}>
                        <label className={style.abertura_sessao_titulo}> Abertura Sessão: </label>  
                        <label className={style.abertura_sessao_titulo}> { aberturaSessao } </label>
                    </div>
                </div>
                <div>
                    <div className={style.fechamento_sessao}>
                        <label className={style.fechamento_sessao_titulo}> Fechamento Sessão: </label>  
                        <label className={style.abertura_sessao_titulo}> { fechamentoSessao } </label>
                    </div>
                </div>           
            </div>
            <div className={style.label_resultado}>
                <label> Total de Votos: </label>
                <label> { quantidadeVotos } </label>
            </div>
        </div>
     )
}

export default Item;