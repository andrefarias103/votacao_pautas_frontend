import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Botao from "../../components/botao";
import { IDadosPerfilUsuarios, atualizaUsuario, usePerfillUsuario, usuarioPorId } from "../../hooks/useUsuarios";
import style from "./css/usuario-editor.module.css";

const UsuarioEditor: React.FC = () => {

    const { id } = useParams();    

    const navigate = useNavigate();    

    const [login, setLogin] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [novaSenha, setNovaSenha] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [endereco, setEndereco] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [cpf, setCpf] = useState<string>();
    const [tipo, setTipo] = useState<string>();

    useEffect(() => {
        async function carregarDados() {
            const user = await usuarioPorId(id);         
            if (user) {
                setLogin(user.login);
                setSenha(user.senha);
                setNovaSenha(user.senha);
                setNome(user.nome);
                setEndereco(user.endereco);
                setEmail(user.email);
                setCpf(user.cpf);
                setTipo(user.tipo);
              }
        }
        carregarDados();
    }, [id]);    

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setLogin(event.target.value); }    
    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setNome(event.target.value); }        
    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setSenha(event.target.value); }        
    const handleNovaSenhaChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setNovaSenha(event.target.value); }        
    const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setEndereco(event.target.value); }    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setEmail(event.target.value); }        
    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setCpf(event.target.value); }    
    const handlePerfilChange = (event: { target: { value: any } }) => { setTipo(event.target.value); };      

    const listaPerfil = usePerfillUsuario();  
    
     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
            console.log('senha: ', senha);
            console.log('nova senha: ', novaSenha);
            if(senha === novaSenha){
                atualizaUsuario({ id, login, nome, senha, endereco, email, cpf, tipo});
                navigate(`/usuarios/`); 
            }
      }; 

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Login:</label>
                            <input type="text" name="login" value={login}  className={style.textBoxNome} onChange ={handleLoginChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Senha:</label>
                            <input type="password" name="senha" value={senha}  className={style.textBoxNome} onChange = {handleSenhaChange}></input>
                        </div>      
                        <div className={style.areaCampos}>
                            <label className={style.label}>Nova Senha:</label>
                            <input type="password" name="novaSenha" value={senha}  className={style.textBoxNome} onChange ={handleNovaSenhaChange}></input>
                        </div>      
                        <div className={style.areaCampos}>
                            <label className={style.label}>Nome:</label>
                            <input type="text" name="nome" value={nome}  className={style.textBoxNome} onChange ={handleNomeChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Endereço:</label>
                            <input type="text" name="endereco" value={endereco}  className={style.textBoxNome} onChange ={handleEnderecoChange}></input>
                        </div>     
                        <div className={style.areaCampos}>
                            <label className={style.label}>E-mail:</label>
                            <input type="text" name="email" value={email}  className={style.textBoxNome} onChange ={handleEmailChange}></input>
                        </div>                                                
                        <div className={style.areaCampos}>
                            <label className={style.label}>CPF:</label>
                            <input type="text" name="cpf" value={cpf}  className={style.textBoxNome} onChange ={handleCpfChange}></input>
                        </div>           
                        <div className={style.areaCampos}>
                            <label className={style.label}>Tipo:</label>
                            <select className={style.textBoxNome}
                            name="selectedTipo"
                            value={tipo} 
                            onChange={handlePerfilChange}>
                            {listaPerfil.map(( itemPerfil) => (
                                <option value={itemPerfil} key={itemPerfil}>
                                    { IDadosPerfilUsuarios[itemPerfil]  }        
                                </option>
                            ))}
                        </select>                            
                        </div>     
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Salvar</Botao>
                        <Link to="/usuarios/" className={style.link}>Voltar</Link>
                    </div>                                               
                </div>
            </form>            
        </div>        
    );
}
export default UsuarioEditor;