import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Botao from "../../componentes/botao";
import { AutenticacaoContexto } from "../../contexto/autenticacao/autenticacaoContexto";
import { PautaPorId } from "../../hooks/usePautas";
import { SessaoPorId } from "../../hooks/useSessoes";
import { createVotacao, verificaSeUsuarioVotou } from "../../hooks/useVotos";
import getCurrentDateTime from "../pauta/utils/dataHora.utils";
import style from "./css/votacao-index.module.css";

const Votacao: React.FC = () => {

    const { id } = useParams();    

    const navigate = useNavigate();

    const auth = useContext(AutenticacaoContexto);

    const [titulo, setTitulo] = useState<string | undefined>();
    const [descricao, setDescricao] = useState<string |undefined>();
    const [opcaoVotada, setOpcaoVotada] = useState<string>('');
    const [dataHoraFim, setDataHoraFim] = useState<string |undefined>(getCurrentDateTime());

    useEffect(() => {
        async function carregarDados() {
            const pauta = await PautaPorId(id);         
            if (pauta) {
                setTitulo(pauta.titulo);
                setDescricao(pauta.descricao);          
                const sessao = await SessaoPorId(pauta.sessaoId);
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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        if (opcaoVotada === '') {
            toast.error('Escolha uma opção de Voto!');
        }
        else {
            if (auth?.usuario?.id) {
                const permissaoParaVotar = await verificaSeUsuarioVotou(Number(id), auth.usuario.CPF);
                if (permissaoParaVotar) {
                    const usuarioId: number = auth.usuario.id;
                    const pautaId: number = Number(id);
                    if (pautaId) {
                        createVotacao(usuarioId, { pautaId, opcaoVotada});
                    }
                else {
                        toast.error('Usuário Já votou!');
                    }
                navigate('/resultado'); 
                }
            }
        }
      };      

    return (
            <div className="wrapper">
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