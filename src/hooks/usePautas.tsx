import { useEffect, useState } from "react";

export interface IDadosPauta { 
            titulo: string,
            tituloPauta: string,
            aberturaSessao: string,
            fechamentoSessao: string,
            categoria: { nome: string},
            quantidadeVotos: string,
            Sessao: {dataHoraInicio: string, dataHoraFim: string},
            votacao: {opcaoVotada: string, dataHoraVoto: string},    
}

export const usePautas = ({ categoriaId } : { categoriaId: string | undefined}) => {
    const [listaPautas, setPautas] = useState<IDadosPauta[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {        

        setLoading(true);

        let categoria =  categoriaId;
        
        if ((categoria !== undefined) && (categoria !== null) && (categoriaId !== "")) {
              categoria = `${categoriaId}`;
        } 
        else {
            categoria = "";
        }
         
        fetch(`http://localhost:3010/pauta/${categoria}`)
             .then((response) => response.json())
             .then((data) => setPautas(data))
             .then(() => setLoading(false))
             
    }, [categoriaId]);

    return {listaPautas, loading};

};