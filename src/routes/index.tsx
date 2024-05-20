import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Home from "../pages/Home";
import CategoriaEditor from "../pages/categoria/categoria-editor";
import CategoriaIncluir from "../pages/categoria/categoria-incluir";
import Usuario from "../pages/usuario";
import UsuarioEditor from "../pages/usuario/usuario-editor";
import UsuarioIncluir from "../pages/usuario/usuario-incluir";



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
      </Routes>
  )
}