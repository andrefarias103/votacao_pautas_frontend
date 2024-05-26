import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Sidebar from "../components/sideBar/Sidebar";
import { RequisitosAutenticacao } from "../contexto/autenticacao/requisitosAutenticacao";
import CategoriaEditor from "../pages/categoria/categoria-editor";
import CategoriaIncluir from "../pages/categoria/categoria-incluir";
import AutenticaPorCPF from "../pages/cpf";
import Login from "../pages/login";
import Logout from "../pages/login/logout";
import Pauta from "../pages/pauta";
import PautaEditor from "../pages/pauta/pauta-editor";
import PautaIncluir from "../pages/pauta/pauta-incluir";
import PautaPorCategoria from "../pages/pautaPorCategoria";
import Usuario from "../pages/usuario";
import UsuarioEditor from "../pages/usuario/usuario-editor";
import UsuarioIncluir from "../pages/usuario/usuario-incluir";
import Votacao from "../pages/votacao";

export const AppRoutes: React.FC = () => {

  return( 
      <>      
        {/* <Menu></Menu>     */}
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
          <Route element = <AutenticaPorCPF></AutenticaPorCPF> path="/cpf/:id" />
        </Routes>
      </>
  )
}