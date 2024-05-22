import { useState } from "react";
import stylePesquisa from "../components/filtroPesquisa/filtro-pesquisa.module.scss";
import Item from "../components/item";
import { IDadosCategoria, useCategorias } from "../hooks/useCategorias";
import { IDadosPautaPorCategoria, usePautas } from "../hooks/usePautas";
import style from "./home.module.css";


function Home() {
  const listaCategorias = useCategorias();
  const [selectedCategoria, setSelectedCategoria] = useState();
  const {listaPautas, loading: loadingPautas } = usePautas({ categoriaId: selectedCategoria });

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

      {loadingPautas ? <p></p> : (
          <div>
            <ul>
              {listaPautas.map((item: IDadosPautaPorCategoria) => (
                <Item
                  titulo={item.categoria.nome}
                  tituloPauta={item.titulo}
                  aberturaSessao={ item.Sessao.dataHoraInicio   }
                  fechamentoSessao={item.Sessao.dataHoraFim}      
                  quantidadeVotos={item.quantidadeVotos}           
                ></Item>                
              ))}
            </ul>
        </div>
  
      )}    
</div>

  );
}

export default Home;
