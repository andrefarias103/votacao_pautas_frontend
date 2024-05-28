export interface IDadosPautaPorCategoria { 
    id: string,
    titulo: string,
    tituloPauta: string,
    aberturaSessao: string,
    fechamentoSessao: string,
    categoria: { nome: string},
    quantidadeVotos: number,
    quantidadeVotosSim: number,
    quantidadeVotosNao: number,
    resultado: string,
    Sessao: {dataHoraInicio: string, dataHoraFim: string},
    votacao: {opcaoVotada: string, dataHoraVoto: string},    
}