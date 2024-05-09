export interface TPautasRequest {
    id: string,
    titulo: string,
    descricao: string,
    categoria: { id: string, nome: string, descricao: string},
    Sessao: { id: string, dataHoraInicio: string, dataHoraFim: string, status: string },
    Votos: { totalSim: number, totalNao: number},
}


