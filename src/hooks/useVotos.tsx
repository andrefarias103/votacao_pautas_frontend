import { toast } from "react-toastify";
import config from "../config";

const baseURL = config.appURL;

export const createVotacao = ( usuarioId: number | undefined,
                             { pautaId, opcaoVotada} : 
                             { pautaId: number | undefined, 
                               opcaoVotada: string | undefined,}) => {    

  fetch(`${baseURL}/votacao/${usuarioId}`, {
     method: 'POST',
     headers: { 'content-type': 'application/json'},
     body: JSON.stringify( { pautaId, opcaoVotada } ),
  }
  ).then((resp) =>  {     
     if (!resp.ok) { 
         return resp.json().then( (error) => { throw new Error(error.message || `HTTP error! Status: ${resp.status}`);  });
      }        
     return resp.json(); 
})
  .then((data) => toast.success("Pauta votada com sucesso"))
  .catch(err => toast.error(err.message));

  return { usuarioId, pautaId, opcaoVotada };

};    



export const verificaSeUsuarioVotou = async( pautaId: number | undefined,
                                        cpf: string | undefined): Promise<boolean> => {    

   fetch(`${baseURL}/votacao/verifica_voto/${pautaId}/${cpf}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json'},
   } ).then((resp) =>  {     
         if (resp.status === 403) { 
            return false
         }        
         else return true;
      })
      .catch(err => toast.error(err.message));
      return true;
};    
