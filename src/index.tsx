import ReactDOM from 'react-dom/client';
// import { App } from './App';
import './global.css';

// import {
//   createBrowserRouter
// } from 'react-router-dom';

// import { App } from './App';
// import CreateCategoria from './pages/Categoria/createCategoriaView';
// import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/categorias/index",
//     element: <App></App>
//   },
//   {
//     path: "/categorias/nova/index",
//     element: <CreateCategoria />
//   }
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

