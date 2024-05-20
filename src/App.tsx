import Menu from "./components/menu";
import Categoria from "./pages/categoria";
// import Home from "./pages/Home";
export function App() {
  return (
    <div>
      <div className="wrapper">
          <Menu />      
          {/* <Home /> */}
          <Categoria></Categoria>              
      </div>      
    </div>
  );
}
