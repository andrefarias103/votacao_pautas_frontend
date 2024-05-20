import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IDadosUsuarios {  
        id: string,       
        login: string,
        nome: string,
        email: string,
        tipo: string,
}
export interface IDadosPerfilUsuarios {
   key: string;
   nome: string;
}

export const createUsuario = (idUserAdm: string | undefined, { login, nome, senha, endereco, email, cpf, tipo } : { 
                                                                              login: string | undefined, 
                                                                              nome: string | undefined, 
                                                                              senha: string | undefined,
                                                                              endereco: string | undefined,
                                                                              email: string | undefined,
                                                                              cpf: string | undefined,
                                                                              tipo: string | undefined 
                                                                           }) => {    
                                                                     
fetch(`http://localhost:3010/usuario/${idUserAdm}`, {
   method: 'POST',
   headers: { 'content-type': 'application/json'},
   body: JSON.stringify( {login, nome, senha, endereco, email, cpf, tipo} ),}).then( (resp) =>  { 
      if (!resp.ok) { 
         throw new Error(`HTTP error! Status: ${resp.status}`);
      }        
      return resp.json(); 
   })
  .then((data) => toast.success("Usuário criado com sucesso") )
  .catch(err => toast.error(err.message) );

return { login, nome, endereco, email, cpf, tipo };

};    

export const usePerfillUsuario = () => {
   const [listaPerfil, setListaPerfil] = useState<IDadosPerfilUsuarios[]>([]);

   useEffect(() => {
        fetch("http://localhost:3010/usuario/filtro_perfil")
           .then((response) => response.json())
           .then((data) => setListaPerfil(data));
   }, []);

   return listaPerfil;

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

export async function usuarioPorId(id: string | undefined) {
   const resposta = fetch(`http://localhost:3010/usuario/filtro_id/${id}`)
      .then((resp) => resp.json())
      .catch(err => console.log(err));
   return resposta;
}

export const atualizaUsuario = async ({ id, login, nome, senha, endereco, email, cpf, tipo } : { id: string | undefined, login: string | undefined, 
                                                                                         nome: string | undefined, senha: string | undefined,
                                                                                     endereco: string | undefined, email: string | undefined,
                                                                                          cpf: string | undefined, tipo: string | undefined,                                                                                  
                                                                                 }) => {    

   fetch(`http://localhost:3010/usuario/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify( { login, nome, senha, endereco, email, cpf, tipo} ),
   }
   ).then((resp) => {
      if (!resp.ok) { 
         throw new Error(`HTTP error! Status: ${resp.status}`);
      }        
      return resp.json();                   
   })
   .then((data) => console.log(data))
   .catch(err => console.log(err));

   toast.success("Usuário atualizado com sucesso");
   return { login, nome, senha, endereco, email, cpf, tipo };
 
 };       

 export const excluirUsuario = async ({ id } : { id: number | undefined }) => {    
   fetch(`http://localhost:3010/usuario/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json'},
   }
 ).then((resp) => {
   if (!resp.ok) { 
      throw new Error(`HTTP error! Status: ${resp.status}`);
   }        
   return resp.json();                   
})
.then((data) => toast.success("Usuário excluído com sucesso"))
.catch(err => toast.error(err.message));
};  