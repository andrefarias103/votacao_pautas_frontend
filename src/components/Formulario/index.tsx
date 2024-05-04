import React from "react";
import ContainerPautasIniciadas from "../ContainerPautasIniciadas";
import FiltroPesquisa from "../FiltroPesquisa";
import Menu from "../Menu";

class Formulario extends React.Component {
    render()  {
        return ( <form> 
                    <div>
                        <Menu></Menu>
                    </div>
                    <div>
                        <FiltroPesquisa></FiltroPesquisa>
                    </div>
                    <div>
                        <ContainerPautasIniciadas></ContainerPautasIniciadas>
                    </div>
                    {/* <div>
                        <label htmlFor="Menu">Aqui vai ser o Menu</label>
                    </div>
                    <Botao>Adicionar</Botao> */}
                </form>
               );
    }
}

export default Formulario;