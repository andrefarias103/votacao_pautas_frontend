import config from "../config";

const baseURL = config.appURL;

 export async function SessaoPorId(id: string | undefined) {
   const resposta = fetch(`${baseURL}/sessao/${id}`)
      .then((resp) => resp.json())
      .catch(err => console.log(err));
   return resposta;
 }