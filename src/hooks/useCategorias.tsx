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
             fetch(`http://localhost:3010/categorias/${nome}`)
                .then((response) => response.json())
                .then((data) => setCategorias(data));
        }, [nome]);
    
        return listaCategorias;
    
    };

    export const mCreateCategoria = ({ nome, descricao } : { nome: string | undefined, descricao: string | undefined}) => {    

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