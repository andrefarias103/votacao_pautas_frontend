import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Botao from "../../components/botao";
import { loginPorCpf } from "../../hooks/useAutenticacao";
import { verificaSeUsuarioVotou } from "../../hooks/useVotos";
import style from "./css/login.module.css";

const AutenticaPorCPF: React.FC  = () => {


    const { id } = useParams();    

    const navigate = useNavigate();

    const [CPF, setCPF] = useState<string | undefined>();

    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setCPF(event.target.value);}
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if(CPF) {
                const validaCPF = await loginPorCpf(CPF);
                if (!validaCPF) {
                    toast.error('CPF inválido ou não cadastrado'); 
                }
                else {
                    const permissaoParaVotar = await verificaSeUsuarioVotou(Number(id), CPF);
                    if (permissaoParaVotar) {
                        navigate(`/votacoes/${id}`);
                    }
                }
            }
        }
            
        catch(error){
            toast.error('Credenciais Inválidas');
        }
    };   

    return (
        <div className="wrapper">    
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>CPF:</label>
                            <input type="text" name="cpf" value={CPF}  className={style.textBoxLogin} onChange={handleCPFChange}></input>
                        </div>   
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Acessar</Botao>
                        <Link to="/" className={style.link}>Cancelar</Link> 
                    </div>                           
                </div>
            </form>
        </div>
    );
}

export default AutenticaPorCPF;