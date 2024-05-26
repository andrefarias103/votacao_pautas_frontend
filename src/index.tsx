import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './global.css';

import { BrowserRouter } from 'react-router-dom';
import { AutenticacaoProvedor } from './contexto/autenticacao/autenticacaoProvedor';
import { AppRoutes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
      <AutenticacaoProvedor>
        <BrowserRouter>      
          <AppRoutes />        
        </BrowserRouter>
        <ToastContainer />  
      </AutenticacaoProvedor>
  </>
);

