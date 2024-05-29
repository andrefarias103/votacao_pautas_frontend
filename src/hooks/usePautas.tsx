import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosPautaPorCategoria } from "../interfaces/TPautasPorCategoria";
import { IDadosPauta } from "../interfaces/TPautasRequest";

const baseURL = config.appURL;

export const usePautas = ({ categoriaId, status } : { categoriaId: string | undefined, status: string | undefined},) => {

    const [listaPautas, setPautas] = useState<IDadosPautaPorCategoria[]>([]);

    useEffect(() => {        

        let categoria =  "";        
        if (categoriaId) {            
            categoria = categoriaId + "/";
        }
        
        const PATH_URL = `${baseURL}/pauta/status/${categoria}${status}`;
        console.log('path_url: ', PATH_URL);

        fetch(PATH_URL)
             .then((response) => response.json())
             .then((data) => setPautas(data)); 
             
    }, [categoriaId, status]);

    console.log(listaPautas);

    return {listaPautas};
};

// export const usePautasConcluidas = ({ categoriaId, status } : { categoriaId: string | undefined, status: string | undefined},) => {

//    const [listaPautas, setPautas] = useState<IDadosPautaPorCategoria[]>([]);

//    useEffect(() => {        

//        let categoria =  "";
       
//        if (categoriaId) {            
//            categoria = categoriaId + "/"
//        }
        
//        console.log(`${baseURL}/pauta/status/${categoria}${status}`);
       
//        fetch(`${baseURL}/pauta/status/${categoria}${status}`)
//             .then((response) => response.json())
//             .then((data) => setPautas(data)); 
            
//    }, [categoriaId, status]);

//    return {listaPautas};
// };

export const createPauta = (
                           { titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim  } : 
                           { titulo: string | undefined, 
                             descricao: string | undefined,
                             categoriaId: number | undefined,
                             dataHoraInicio: string | undefined,
                             dataHoraFim: string | undefined,}) => {    

//   if((!titulo) || (!descricao)) {
//      return;
//   }

  fetch(`${baseURL}/pauta/`, {
     method: 'POST',
     headers: { 'content-type': 'application/json'},
     body: JSON.stringify( {titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim} ),
  }
  ).then((resp) =>  {     
     if (!resp.ok) { 
        throw new Error(`HTTP error! Status: ${resp.status}`);
     }        
     return resp.json(); 
})
  .then((data) => toast.success("Pauta criada com sucesso"))
  .catch(err => toast.error(err.message));

  return { titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim };

};    

export const usePautasPorNome = ({ nome } : { nome: string | undefined}) => {
    const [listaPautas, setPautas] = useState<IDadosPauta[]>([]);
    useEffect(() => {
         let complemento_path: string = '';
         if (nome) {
           complemento_path = `/filtro_nome/${nome}`;
         }
 
           fetch(`${baseURL}/pauta${complemento_path}`)
               .then((response) => response.json())
               .then((data) => setPautas(data));               
    }, [nome]);
 
    return listaPautas;    
 };

 export const atualizaPauta = ({ id, titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim  } : 
                                 { id: string | undefined, 
                                 titulo: string | undefined, 
                                 descricao: string | undefined,
                                 categoriaId: number | undefined,
                                 dataHoraInicio: string | undefined,
                                 dataHoraFim: string | undefined,}) => {    

   fetch(`${baseURL}/pauta/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify( {titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim} ),
   }
   ).then((resp) => resp.json()) 
   .then((data) => console.log(data))
   .catch(err => console.log(err));

   toast.success("Pauta atualizada com sucesso");

   return { titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim };
 
 };     


 export const excluirPauta = async ({ id } : { id: number | undefined }) => {    
    fetch(`${baseURL}/pauta/${id}`, {
       method: 'DELETE',
       headers: { 'content-type': 'application/json'},
    }
  ).then((resp) => {
    if (!resp.ok) { 
       throw new Error(`HTTP error! Status: ${resp.status}`);
    }        
    return resp.json();                   
 })
 .then((data) => toast.success("Pauta excluída com sucesso"))
 .catch(err => toast.error(err.message));
 };  

 export async function PautaPorId(id: string | undefined) {
   const resposta = fetch(`${baseURL}/pauta/filtro_id/${id}`)
      .then((resp) => resp.json())
      .catch(err => console.log(err));
   return resposta;
 }