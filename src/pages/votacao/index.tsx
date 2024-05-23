import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Botao from "../../components/botao";
import Menu from "../../components/menu";
import { PautaPorId } from "../../hooks/usePautas";
import { SessaoPorId } from "../../hooks/useSessoes";
import { createVotacao } from "../../hooks/useVotos";
import getCurrentDateTime from "../pauta/utils/dataHora.utils";
import style from "./css/votacao-index.module.css";

const Votacao: React.FC = () => {

    const { id } = useParams();    

    const navigate = useNavigate();

    const [titulo, setTitulo] = useState<string | undefined>();
    const [descricao, setDescricao] = useState<string |undefined>();
    const [opcaoVotada, setOpcaoVotada] = useState<string>('');
    const [dataHoraFim, setDataHoraFim] = useState<string |undefined>(getCurrentDateTime());

    useEffect(() => {
        async function carregarDados() {
            const agenda = await PautaPorId(id);         
            if (agenda) {
                setTitulo(agenda.titulo);
                setDescricao(agenda.descricao);          
                const sessao = await SessaoPorId(agenda.sessaoId);
                if (sessao) {
                    const dataFormatada = new Date(sessao.dataHoraFim).toLocaleString();
                    setDataHoraFim(dataFormatada);
                }
              }
        }
        carregarDados();
    }, [id]);

    const handleOpcaoVotadaChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setOpcaoVotada(event.target.value);
    }    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        if (opcaoVotada === '') {

        }
        else {
            const usuarioId: number = 1; /// passar esse valor por parametro
            const pautaId: number = Number(id);
            if (pautaId) {
                createVotacao(usuarioId, { pautaId, opcaoVotada});
            }
            navigate('/'); 
        }
      };      

    return (
            <div className="wrapper">
                <Menu />     
                <form onSubmit={handleSubmit}> 
                    <div className={style.AppStyle}>
                        <div className={style.container}>
                            <div className={style.areaCampos}>
                                <label className={style.labelTitulo}>{titulo}</label>
                            </div>
                            <div className={style.areaCampos}>
                                <label className={style.label}>{descricao}</label>
                            </div>                   
                            <div className={style.areaData}>
                                <label className={style.labelEncerramento}>Data/Hora de Encerramento: </label>
                                <label className={style.labelData}>{dataHoraFim}</label>
                            </div>      
                            <div className={style.areaCampos}>
                                <label className={style.labelEscolhaVoto}>Escolha o seu voto: </label>
                            </div>     
                            <div className={style.areaVoto}>
                                <div className={style.areaVoto}>
                                    <input type="radio" className={style.radio} id="opcao1" name="opcao" value="Sim" onChange={handleOpcaoVotadaChange}></input>
                                    <label className={style.labelOpcoesVoto}>Sim</label>
                                </div>
                                <div className={style.areaVoto}>
                                    <input type="radio" className={style.radio} id="opcao2" name="opcao" value="Nao" onChange={handleOpcaoVotadaChange}></input>
                                    <label className={style.labelOpcoesVoto}>Não</label>                                                                                                           
                                </div>
                            </div>   
                        </div>
                        <div className={style.areabotao}>
                            <Botao type="submit">Confirma</Botao>
                            <Link to="/" className={style.link}>Cancelar</Link>
                        </div>                           
                    </div>
                </form>
            </div>
    )
}

export default Votacao;