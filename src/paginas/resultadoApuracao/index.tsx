import { useState } from "react";
import stylePesquisa from "../../componentes/blocoParaPesquisa/css/filtro-pesquisa.module.css";
import ContainerInfoDadosResultadoVotacao from "../../componentes/containerInfoDadosResultadoVotacao";
import { useCategorias } from "../../hooks/useCategorias";
import { usePautasConcluidas } from "../../hooks/usePautas";
import { IDadosCategoria } from "../../interfaces/TCategorias";
import { IDadosPautaPorCategoria } from "../../interfaces/TPautasPorCategoria";
import style from "./css/resultado.apuracao.module.css";

function ResultadoApuracao() {

    const listaCategorias = useCategorias();
    const [selectedCategoria, setSelectedCategoria] = useState();
    const { listaPautas }= usePautasConcluidas({ categoriaId: undefined, status: 'STATUS_CONCLUIDA'});

    const handleCategoriaChange = (event: { target: { value: any } }) => {
        setSelectedCategoria(event.target.value);
      };

    return (
        <div className={style.AppStyle}>
            <div className={stylePesquisa.filtro} >
                <label> Filtrar por Categoria: </label>
                <select
                    name="filtro"
                    value={selectedCategoria}
                    onChange={handleCategoriaChange}
                    >
                    <option value={""}>
                        Todas as Categorias
                    </option>

                    {listaCategorias.map((option: IDadosCategoria) => (
                        <option value={option.id}>
                        {option.nome}
                        </option>
                    ))}
                </select>            
            </div>
            <div>
                <ul>
                    {
                    listaPautas.map((item: IDadosPautaPorCategoria) => 
                        (                           
                            <ContainerInfoDadosResultadoVotacao
                                pautaId={item.id}
                                titulo={item.categoria.nome}
                                tituloPauta={item.titulo}
                                quantidadeVotos={item.quantidadeVotos}
                                quantidadeVotosSim= {item.quantidadeVotosSim}
                                quantidadeVotosNao={item.quantidadeVotosNao}
                                resultado={item.resultado} >
                            </ContainerInfoDadosResultadoVotacao>
                        )                    
                    )}    
                </ul>
            </div>
        </div>

    );


}

export default ResultadoApuracao;