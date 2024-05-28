import { useNavigate } from "react-router-dom";
import Botao from "../botao";
import style from "./css/item.module.css";

function ContainerInfoDadosPautasPorCategoria ( props : { children?: React.ReactNode, pautaId: string, titulo: string, tituloPauta: string, aberturaSessao: string, fechamentoSessao: string, quantidadeVotos: number} ) {
    
    const navigate = useNavigate();

    const { pautaId, titulo, tituloPauta, aberturaSessao, fechamentoSessao, quantidadeVotos } = props;

    const clickVotar = (id: string) => {
        //navigate(`/cpf/${id}`); 
        navigate(`/votacoes/${id}`); 
    }

    return (
        <div className={style.container}>
            <div className={style.area_categoria}>
                <div>
                    <label className={style.label_categoria}> {titulo} </label>
                    <div className={style.label_pauta}><label> {tituloPauta} </label></div>
                </div>
                <Botao type="button" onClick={() => clickVotar(pautaId)}>Iniciada</Botao> 
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

export default ContainerInfoDadosPautasPorCategoria;