
 export async function SessaoPorId(id: string | undefined) {
   const resposta = fetch(`http://localhost:3010/sessao/${id}`)
      .then((resp) => resp.json())
      .catch(err => console.log(err));
   return resposta;
 }