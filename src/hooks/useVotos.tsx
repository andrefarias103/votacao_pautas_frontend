import { toast } from "react-toastify";

export const createVotacao = ( usuarioId: number | undefined,
                             { pautaId, opcaoVotada} : 
                             { pautaId: number | undefined, 
                               opcaoVotada: string | undefined,}) => {    

  fetch(`http://localhost:3010/votacao/${usuarioId}`, {
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
