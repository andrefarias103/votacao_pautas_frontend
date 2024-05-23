import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IDadosPautaPorCategoria { 
            id: string,
            titulo: string,
            tituloPauta: string,
            aberturaSessao: string,
            fechamentoSessao: string,
            categoria: { nome: string},
            quantidadeVotos: string,
            Sessao: {dataHoraInicio: string, dataHoraFim: string},
            votacao: {opcaoVotada: string, dataHoraVoto: string},    
}

export interface IDadosPauta { 
  id: string,
  titulo: string,
  descricao: string,
}

export const usePautas = ({ categoriaId } : { categoriaId: string | undefined}) => {
    const [listaPautas, setPautas] = useState<IDadosPautaPorCategoria[]>([]);

    useEffect(() => {        

        let categoria =  categoriaId;
        
        if ((categoria !== undefined) && (categoria !== null) && (categoriaId !== "")) {
              categoria = `${categoriaId}`;
        } 
        else {
            categoria = "";
        }
         
        fetch(`http://localhost:3010/pauta/liberadas/${categoria}`)
             .then((response) => response.json())
             .then((data) => setPautas(data)); 
             
    }, [categoriaId]);



    return {listaPautas};

};

export const createPauta = (idUserAdm: string | undefined,
                           { titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim  } : 
                           { titulo: string | undefined, 
                             descricao: string | undefined,
                             categoriaId: number | undefined,
                             dataHoraInicio: string | undefined,
                             dataHoraFim: string | undefined,}) => {    

//   if((!titulo) || (!descricao)) {
//      return;
//   }

  fetch(`http://localhost:3010/pauta/${idUserAdm}`, {
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
 
           fetch(`http://localhost:3010/pauta${complemento_path}`)
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

   fetch(`http://localhost:3010/pauta/${id}`, {
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
    fetch(`http://localhost:3010/pauta/${id}`, {
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
   const resposta = fetch(`http://localhost:3010/pauta/filtro_id/${id}`)
      .then((resp) => resp.json())
      .catch(err => console.log(err));
   return resposta;
 }