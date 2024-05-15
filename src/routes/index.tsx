import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Home from "../pages/Home";
import CategoriaEditor from "../pages/categoria/categoria-editor";
import CategoriaIncluir from "../pages/categoria/categoria-incluir";



export const AppRoutes: React.FC = () => {
  return( 
      <Routes>        
        <Route element = <Home></Home>  path="/"  />
        <Route element = <App></App>  path="/categorias/index" />
        <Route element = <CategoriaIncluir></CategoriaIncluir>  path="/categorias/adicionar/index" />
        <Route element = <CategoriaEditor></CategoriaEditor>  path="/categorias/editar/index/:id" />
      </Routes>
  )
}