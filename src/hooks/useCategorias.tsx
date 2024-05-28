import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../config";
import { IDadosCategoria } from "../interfaces/TCategorias";
import { getToken } from "./useAutenticacao";

const baseURL = config.appURL;

export const useCategorias = () => {
    const [listaCategorias, setCategorias] = useState<IDadosCategoria[]>([]);

    useEffect(() => {
         fetch(`${baseURL}/categorias`)
            .then((response) => response.json())
            .then((data) => setCategorias(data));
    }, []);

    return listaCategorias;

};

export const useCategoriasPorNome = ({ nome } : { nome: string | undefined}) => {
        const [listaCategorias, setCategorias] = useState<IDadosCategoria[]>([]);
        useEffect(() => {
             let complemento_path: string = '';
             if (nome) {
               complemento_path = `/filtro_nome/${nome}`;
             }

            fetch(`${baseURL}/categorias${complemento_path}`)
               .then((resp) => resp.json())
               .then((data) => setCategorias(data));               
        }, [nome]);
    
        return listaCategorias;    
    };

    export const createCategoria = ({ nome, descricao } : { nome: string | undefined, descricao: string | undefined}) => {    

      if((!nome) || (!descricao)) {
         return;
      }

      const token = getToken();
      
      fetch(`${baseURL}/categorias/`, {
         method: 'POST',
         headers: { 
            Authorization: token ? `Bearer ${token}` : '',
            'content-type': 'application/json'
         },
         body: JSON.stringify( {nome, descricao} ),
      }
      ).then((resp) =>  {     
         if (!resp.ok) { 
            throw new Error(`HTTP error! Status: ${resp.status}`);
         }        
         return resp.json(); 
   })
      .then((data) => toast.success("Categoria criada com sucesso"))
      .catch(err => toast.error(err.message));

      return { nome, descricao };
    
    };    

    export const atualizaCategoria = ({ id, nome, descricao } : { id: string | undefined, nome: string | undefined, descricao: string | undefined}) => {    

      if((!nome) || (!descricao)) {
         return;
      }

      fetch(`${baseURL}/categorias/${id}`, {
         method: 'PUT',
         headers: { 'content-type': 'application/json'},
         body: JSON.stringify( {nome, descricao} ),
      }
      ).then((resp) => resp.json()) 
      .then((data) => console.log(data))
      .catch(err => console.log(err));

      toast.success("Categoria atualizada com sucesso");

      return { nome, descricao };
    
    };       

    export const excluirCategoria = ({ id } : { id: number | undefined }) => {    
      fetch(`${baseURL}/categorias/${id}`, {
         method: 'DELETE',
         headers: { 'content-type': 'application/json'},
      }
      ).then((resp) => {
         if (!resp.ok) { 
            throw new Error(`HTTP error! Status: ${resp.status}`);
         }        
         return resp.json();                   
      })
      .then((data) => toast.success("Categoria excluída com sucesso"))
      .catch(err => toast.error(err.message));
    };  

    export async function categoriaPorId(id: string | undefined) {
      const resposta = fetch(`${baseURL}/categorias/filtro_id/${id}`)
         .then((resp) => resp.json())
         .catch(err => console.log(err));
      return resposta;
    }


   //  export const useCategoriaPorId = ({ id } : { id: string | undefined}) => {    
   //    const [categoria, setCategoria] = useState<IDadosCategoria>();
   //    useEffect(()=>{
   //       console.log('buscou');
   //       fetch(`http://localhost:3010/categorias/filtro_id/${id}`)
   //       .then((resp) => resp.json())
   //       .then((data) => setCategoria(data));
         
   //    },[id]);
   //    return categoria;
   //  }; 


