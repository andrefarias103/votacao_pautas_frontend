import { useEffect, useState } from "react";

export interface IDadosUsuarios {  
        id: string,       
        login: string,
        nome: string,
        email: string,
        tipo: string,
}

export const createUsuario = (idUserAdm: string, { login, nome, senha, endereco, email, cpf, tipo } : { 
                                                                              login: string | undefined, 
                                                                              nome: string | undefined, 
                                                                              senha: string | undefined,
                                                                              endereco: string | undefined,
                                                                              email: string | undefined,
                                                                              cpf: string | undefined,
                                                                              tipo: string | undefined 
                                                                           }) => {    

console.log({ login, nome, senha, endereco, email, cpf, tipo });                                                                           
fetch(`http://localhost:3010/usuario/${idUserAdm}`, {
   method: 'POST',
   headers: { 'content-type': 'application/json'},
   body: JSON.stringify( {login, nome, senha, endereco, email, cpf, tipo} ),
}
).then((resp) => resp.json()) 
.then((data) => console.log(data))
.catch(err => console.log(err));

return { login, nome, endereco, email, cpf, tipo };

};    

export const useUsuariosPorNome = ({ nome } : { nome: string | undefined}) => {
   const [listaUsuarios, setUsuarios] = useState<IDadosUsuarios[]>([]);
   useEffect(() => {
        let complemento_path: string = '';
        if (nome) {
          complemento_path = `/filtro_nome/${nome}`;
        }

          fetch(`http://localhost:3010/usuario${complemento_path}`)
              .then((response) => response.json())
              .then((data) => setUsuarios(data));               
   }, [nome]);

   return listaUsuarios;    
};
