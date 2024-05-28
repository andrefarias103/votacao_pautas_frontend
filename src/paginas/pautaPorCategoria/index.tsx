import { useState } from "react";
import stylePesquisa from "../../componentes/blocoParaPesquisa/css/filtro-pesquisa.module.css";
import ContainerInfoDadosPautasPorCategoria from "../../componentes/containerInforDadosPautasPorCategoria";
import { useCategorias } from "../../hooks/useCategorias";
import { usePautas } from "../../hooks/usePautas";
import { IDadosCategoria } from "../../interfaces/TCategorias";
import { IDadosPautaPorCategoria } from "../../interfaces/TPautasPorCategoria";
import style from "./css/pautaPorCategoria.module.css";


function PautaPorCategoria() {
  const listaCategorias = useCategorias();
  const [selectedCategoria, setSelectedCategoria] = useState();
  const {listaPautas } = usePautas({ categoriaId: selectedCategoria, status: 'STATUS_INICIADA' });

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
          {listaPautas.map((item: IDadosPautaPorCategoria) => (
            <ContainerInfoDadosPautasPorCategoria
              pautaId={item.id}
              titulo={item.categoria.nome}
              tituloPauta={item.titulo}
              aberturaSessao={ item.Sessao.dataHoraInicio   }
              fechamentoSessao={item.Sessao.dataHoraFim}      
              quantidadeVotos={item.quantidadeVotos}           
            ></ContainerInfoDadosPautasPorCategoria>                
          ))}
        </ul>
    </div>   
</div>

  );
}

export default PautaPorCategoria;
