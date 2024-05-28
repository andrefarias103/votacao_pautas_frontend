import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Sidebar from "../componentes/sideBar/Sidebar";
import { RequisitosAutenticacao } from "../contexto/autenticacao/requisitosAutenticacao";
import CategoriaEditor from "../paginas/categoria/categoria-editor";
import CategoriaIncluir from "../paginas/categoria/categoria-incluir";
import Login from "../paginas/login";
import Logout from "../paginas/login/logout";
import Pauta from "../paginas/pauta";
import PautaEditor from "../paginas/pauta/pauta-editor";
import PautaIncluir from "../paginas/pauta/pauta-incluir";
import PautaPorCategoria from "../paginas/pautaPorCategoria";
import ResultadoApuracao from "../paginas/resultadoApuracao";
import Usuario from "../paginas/usuario";
import UsuarioEditor from "../paginas/usuario/usuario-editor";
import UsuarioIncluir from "../paginas/usuario/usuario-incluir";
import Votacao from "../paginas/votacao";

export const AppRoutes: React.FC = () => {

  return( 
      <>      
        <Sidebar />
        <Routes>                
          <Route element = <Login></Login> path="/" />
          <Route element = <Login></Login> path="/login" />
          <Route element = <Logout></Logout> path="/logout" />
          <Route element = <PautaPorCategoria></PautaPorCategoria> path="/categorias/pautas/"  />
          <Route element = <Usuario></Usuario>  path="/usuarios/" />
          <Route element = {<RequisitosAutenticacao><UsuarioIncluir /></RequisitosAutenticacao>}  path="/usuarios/adicionar/" />
          <Route element = {<RequisitosAutenticacao><UsuarioEditor /></RequisitosAutenticacao>}  path="/usuarios/editar/:id" />  
          <Route element = <App></App>  path="/categorias/" /> 
          <Route element = {<RequisitosAutenticacao><CategoriaIncluir /></RequisitosAutenticacao>}  path="/categorias/adicionar/" />
          <Route element = {<RequisitosAutenticacao><CategoriaEditor /></RequisitosAutenticacao>}  path="/categorias/editar/:id" />
          <Route element = <Pauta></Pauta>  path="/pautas/" />
          <Route element = {<RequisitosAutenticacao><PautaIncluir /></RequisitosAutenticacao>}   path="/pautas/adicionar/" />
          <Route element = {<RequisitosAutenticacao><PautaEditor /></RequisitosAutenticacao>}   path="/pautas/editar/:id" />   
          <Route element = <Votacao></Votacao>  path="/votacoes/:id" />       
          {/* <Route element = <AutenticaPorCPF></AutenticaPorCPF> path="/cpf/:id" /> */}
          <Route element = <ResultadoApuracao></ResultadoApuracao> path="/resultado/"  />
        </Routes>
      </>
  )
}