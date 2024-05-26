import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Botao from "../../components/botao";
import { AutenticacaoContexto } from "../../contexto/autenticacao/autenticacaoContexto";
import style from "./css/login.module.css";

const Login: React.FC  = () => {

    const auth = useContext(AutenticacaoContexto);

    const navigate = useNavigate();

    const [login, setLogin] = useState<string | undefined>();
    const [senha, setSenha] = useState<string | undefined>();

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setLogin(event.target.value);}
    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setSenha(event.target.value);}
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if(login && senha) {
                const estaLogado = await auth.login(login, senha);
                if (estaLogado) {
                    navigate('/categorias/');
                }
                else {
                    toast.error('Usuário sem permissão para acessar a página'); 
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
                            <label className={style.label}>Login:</label>
                            <input type="text" name="login" value={login}  className={style.textBoxLogin} onChange={handleLoginChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Senha:</label>
                            <input type="password" name="senha" value={senha}  className={style.textBoxSenha} onChange={handleSenhaChange}></input>
                        </div>      
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Login</Botao>
                        <Link to="/" className={style.link}>Cancelar</Link> 
                    </div>                           
                </div>
            </form>
        </div>
    );
}

export default Login;