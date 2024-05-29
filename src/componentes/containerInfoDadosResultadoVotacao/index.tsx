
import style from "./css/item.module.css";

function ContainerInfoDadosResultadoVotacao ( props : { children?: React.ReactNode, 
                                   pautaId: string, 
                                   titulo: string, 
                                   tituloPauta: string, 
                                   quantidadeVotos: number,
                                   quantidadeVotosSim: number,
                                   quantidadeVotosNao: number,
                                   resultado: string} ) {

    const { titulo, tituloPauta, quantidadeVotosSim, quantidadeVotosNao, quantidadeVotos, resultado } = props;

    console.log('PROPS: ', props);

    return (
        <div className={style.container}>
            <div className={style.area_titulo}>
                <div>
                    <label className={style.label_categoria}> Categoria: {titulo} </label>
                    <div className={style.label_pauta}><label> Pauta: {tituloPauta} </label></div>
                </div>
            </div>
            <div className={style.votacao}>
                    <div>
                        <label className={style.label_titulo_votacao}> Total de Votos: </label>  
                        <label className={style.label_totalvotos}> { quantidadeVotos } </label>                     
                    </div>
                    <div>
                        <label className={style.votacao_sim}> Sim: </label> 
                        <label className={style.label_totalvotos_sim}> { quantidadeVotosSim } </label>
                    </div>         
                    <div>
                        <label className={style.votacao_nao}> Não: </label>   
                        <label className={style.label_totalvotos_nao}> { quantidadeVotosNao } </label>
                    </div>
                    <div>
                        <label className={style.label_titulo_resultado}> Aprovado: </label>
                        <label className={style.label_resultado}> {resultado } </label>
                    </div>                      
            </div>
                        
        </div>
    ) 
        
}

export default ContainerInfoDadosResultadoVotacao;