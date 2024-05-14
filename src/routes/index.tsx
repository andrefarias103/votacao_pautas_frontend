import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import Home from "../pages/Home";
import CategoriaEditor from "../pages/categoria/categoria-editor";



export const AppRoutes: React.FC = () => {
  return(
      <Routes>
        <Route element = <Home></Home>  path="/"  />
        <Route element = <App></App>  path="/categorias/index" />
        <Route element = <CategoriaEditor></CategoriaEditor>  path="/categorias/nova/index" />
      </Routes>
  )
}