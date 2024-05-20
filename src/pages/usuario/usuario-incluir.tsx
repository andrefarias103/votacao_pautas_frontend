import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Botao from "../../components/botao";
import Menu from "../../components/menu";
import { IDadosPerfilUsuarios, createUsuario, usePerfillUsuario } from "../../hooks/useUsuarios";
import style from "./css/usuario-editor.module.css";

const UsuarioIncluir: React.FC = () => {    

    const navigate = useNavigate();

    const {idUserAdmin} = useParams();    

    const [login, setLogin] = useState<string | undefined>();
    const [senha, setSenha] = useState<string | undefined>();
    const [novaSenha, setNovaSenha] = useState<string | undefined>();
    const [nome, setNome] = useState<string | undefined>();
    const [endereco, setEndereco] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [cpf, setCpf] = useState<string |undefined>();
    const [tipo, setTipo] = useState<string |undefined>();

    const listaPerfil: IDadosPerfilUsuarios[] = usePerfillUsuario();  
    const selectRef = useRef<HTMLSelectElement>(null);
    
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setLogin(event.target.value);}
    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setSenha(event.target.value);}
    const handleNovaSenhaChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setNovaSenha(event.target.value);}
    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setNome(event.target.value);}
    const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setEndereco(event.target.value);}
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setEmail(event.target.value);}
    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setCpf(event.target.value);}
    const handlePerfilChange = (event: { target: { value: any } }) => { setTipo(event.target.value); };    

    useEffect(() => {            
        if (listaPerfil.length > 0) {
            const defaultValue = listaPerfil[0].key; 
            setTipo(defaultValue);
            if (selectRef.current) {
            const event = new Event('change', { bubbles: true });
            selectRef.current.value = defaultValue;
            selectRef.current.dispatchEvent(event);
            }
        }
      }, [listaPerfil]);    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();    
        if (idUserAdmin) {    }        
            if(senha !== novaSenha){
                toast.error('"Senha" e "Nova Senha" são diferentes!');
            }     
            else {  
                createUsuario(idUserAdmin, { login, nome, senha, endereco, email, cpf, tipo});  
                navigate(`/usuarios/index`);                              
            }                                      
      }; 

    return (
        <div className="wrapper">
            <Menu />     
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Login:</label>
                            <input type="text" name="login" value={login}  className={style.textBoxNome} onChange ={handleLoginChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Senha:</label>
                            <input type="password" name="senha" value={senha}  className={style.textBoxNome} onChange ={handleSenhaChange}></input>
                        </div>      
                        <div className={style.areaCampos}>
                            <label className={style.label}>Nova Senha:</label>
                            <input type="password" name="novaSenha" value={novaSenha}  className={style.textBoxNome} onChange ={handleNovaSenhaChange}></input>
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
                            <input type="text" name="cpf" value={cpf}  className={style.textBoxNome} onChange ={handleCPFChange}></input>
                        </div>           
                        <div className={style.areaCampos}>
                            <label className={style.label}>Tipo:</label>
                            <select className={style.textBoxNome}
                            name="selectedTipo"
                            value={tipo} 
                            onChange={handlePerfilChange}>
                            {listaPerfil.map(( itemPerfil) => (
                                <option value={itemPerfil.key} key={itemPerfil.key}>
                                    {itemPerfil.nome}        
                                </option>
                            ))}
                        </select>                            
                        </div>      
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Salvar</Botao>
                        <Link to="/usuarios/index" className={style.link}>Voltar</Link>
                    </div>    
                                           
                </div>
            </form>            
        </div>        
    );
}
export default UsuarioIncluir;