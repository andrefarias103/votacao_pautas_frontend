import React from "react";
import Item from "./Item";


class ContainerPautasIniciadas extends React.Component {
    render() {
        const listaDePautas = [{ 
                                    categoria: 'Assembléia Sindical', 
                                    tituloPauta: 'Votação do reajuste do vale-refeição',
                                    aberturaSessao: '10/05/2024 10:00:00',
                                    fechamentoSessao: '10/05/2024 11:00:00',
                                },
                                { 
                                    categoria: 'Assembléia Sindical', 
                                    tituloPauta: 'Folga para o funcionário no dia do aniversário',
                                    aberturaSessao: '11/05/2024 08:00:00',
                                    fechamentoSessao: '11/05/2024 09:00:00',                                    
                                }];
        
        return (
            <ul> { 
                    listaDePautas.map( (item, index) => (
                                <Item {...item} key = {index}> </Item>                                
                        ) 
                    )
                 }
            </ul>

            // <div className={style.container}>
            //     <div className={style.area_categoria}>
            //         <label className={style.label_categoria}> [Descricao Categoria] </label>
            //         <Botao>Iniciada</Botao>
            //     </div>
            //     <div className={style.label_pauta}><label> [Descricao Pauta] </label></div>
            //     <div className={style.sessao}>
            //         <div className={style.abertura_sessao}>
            //             <label className={style.abertura_sessao_titulo}> Abertura Sessão: </label>
            //             <label className={style.abertura_sessao_valor}> [Data/Hora Abertura Sessão] </label>
            //         </div>
            //         <div className={style.fechamento_sessao}>
            //             <label className={style.fechamento_sessao_titulo}> Fechamento Sessão: </label>
            //             <label className={style.fechamento_sessao_valor}> [Data/Hora Fechamento Sessão] </label>
            //         </div>                    
            //     </div>
            //     <div className={style.label_resultado}>
            //         <label> Resultado: </label>
            //         <label> [0 votos] </label>
            //     </div>
            // </div>
        );
    }
}

export default ContainerPautasIniciadas;