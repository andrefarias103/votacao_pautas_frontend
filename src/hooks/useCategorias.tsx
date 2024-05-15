import { useEffect, useState } from "react";

export interface IDadosCategoria { 
        id: string,
        nome: string, 
        descricao: string, 
}

export const useCategorias = () => {
    const [listaCategorias, setCategorias] = useState<IDadosCategoria[]>([]);

    useEffect(() => {
         fetch("http://localhost:3010/categorias")
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

               fetch(`http://localhost:3010/categorias${complemento_path}`)
                   .then((response) => response.json())
                   .then((data) => setCategorias(data));
               
        }, [nome]);
    
        return listaCategorias;    
    };

    export const createCategoria = ({ nome, descricao } : { nome: string | undefined, descricao: string | undefined}) => {    

      if((!nome) || (!descricao)) {
         return;
      }

      fetch(`http://localhost:3010/categorias/`, {
         method: 'POST',
         headers: { 'content-type': 'application/json'},
         body: JSON.stringify( {nome, descricao} ),
      }
      ).then((resp) => resp.json()) 
      .then((data) => console.log(data))
      .catch(err => console.log(err));

      return { nome, descricao };
    
    };    

    export const atualizaCategoria = ({ id, nome, descricao } : { id: string | undefined, nome: string | undefined, descricao: string | undefined}) => {    

      if((!nome) || (!descricao)) {
         return;
      }

      fetch(`http://localhost:3010/categorias/${id}`, {
         method: 'PUT',
         headers: { 'content-type': 'application/json'},
         body: JSON.stringify( {nome, descricao} ),
      }
      ).then((resp) => resp.json()) 
      .then((data) => console.log(data))
      .catch(err => console.log(err));

      return { nome, descricao };
    
    };       

    export const excluirCategoria = ({ id } : { id: number | undefined }) => {    
      fetch(`http://localhost:3010/categorias/${id}`, {
         method: 'DELETE',
         headers: { 'content-type': 'application/json'},
      }
      ).then((resp) => resp.json()) 
      .then((data) => console.log(data))
      .catch(err => console.log(err));
    };  

    export async function categoriaPorId(id: string | undefined) {
      const resposta = fetch(`http://localhost:3010/categorias/filtro_id/${id}`)
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


