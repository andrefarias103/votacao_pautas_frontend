import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Home from "../pages/Home";
import CategoriaEditor from "../pages/categoria/categoria-editor";
import CategoriaIncluir from "../pages/categoria/categoria-incluir";
import Pauta from "../pages/pauta";
import PautaEditor from "../pages/pauta/pauta-editor";
import PautaIncluir from "../pages/pauta/pauta-incluir";
import Usuario from "../pages/usuario";
import UsuarioEditor from "../pages/usuario/usuario-editor";
import UsuarioIncluir from "../pages/usuario/usuario-incluir";
import Votacao from "../pages/votacao";



export const AppRoutes: React.FC = () => {
  return( 
      <Routes>        
        <Route element = <Home></Home>  path="/"  />
        <Route element = <Usuario></Usuario>  path="/usuarios/index" />
        <Route element = <UsuarioIncluir></UsuarioIncluir>  path="/usuarios/adicionar/index/:idUserAdmin" />
        <Route element = <UsuarioEditor></UsuarioEditor>  path="/usuarios/editar/index/:id" />        
        <Route element = <App></App>  path="/categorias/index" />
        <Route element = <CategoriaIncluir></CategoriaIncluir>  path="/categorias/adicionar/index" />
        <Route element = <CategoriaEditor></CategoriaEditor>  path="/categorias/editar/index/:id" />
        <Route element = <Pauta></Pauta>  path="/pautas/index" />
        <Route element = <PautaIncluir></PautaIncluir>  path="/pautas/adicionar/index/:idUserAdmin" />
        <Route element = <PautaEditor></PautaEditor>  path="/pautas/editar/index/:id" />   
        <Route element = <Votacao></Votacao>  path="/votacoes/:id" />       
      </Routes>
  )
}