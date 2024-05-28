import config from "../config";

   export interface LoginResponse {
      id: number,
      login: string,
      nome: string,
      token_acesso: string;
      CPF: string;
 }
 
 const baseURL = config.appURL;
 
 export const loginAuthenticate = async (login: string | undefined, senha: string | undefined): Promise<LoginResponse> => {

   const response = await fetch(`${baseURL}/autenticacao/login`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ login, senha }),
   });
 
   if (!response.ok) {
     throw new Error('Não foi possível estabelecer comunicação');
   }
 
   const data = await response.json();
   if (data.token_acesso) {
     sessionStorage.setItem('token', data.token_acesso);
   }
   return data;
 };


 export const loginPorCpf = async (cpf: string | undefined): Promise<boolean> => {

  const response = await fetch(`${baseURL}/autenticacao/cpf`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cpf }),
  });

  if (!response.ok) {
    throw new Error('Não foi possível estabelecer comunicação');
  }

  return true;

};
  

 export const getToken = (): string | null => {
   return sessionStorage.getItem('token');
 };


 export const validateToken = async (token: string): Promise<LoginResponse>  => {
  const response = await fetch(`${baseURL}/autenticacao/profile/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  });  
  const data = await response.json();
  return data;
}


