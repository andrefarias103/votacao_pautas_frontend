import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Botao from "../../componentes/botao";
import { atualizaCategoria, categoriaPorId } from "../../hooks/useCategorias";
import style from "./css/categoria-editor.module.css";

const CategoriaEditor: React.FC = () => {

    const { id } = useParams();    

    const navigate = useNavigate();

    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    useEffect(() => {
        async function carregarDados() {
            const category = await categoriaPorId(id);         
            if (category) {
                setNome(category.nome);
                setDescricao(category.descricao);
              }
        }
        carregarDados();
    }, [id]);

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setNome(event.target.value);
    }    

    const handleDesricaoChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
         setDescricao(event.target.value);
     }    

     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        atualizaCategoria({id, nome, descricao});
        navigate(`/categorias/`); 
      };        

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Nome:</label>
                            <input type="text" name="nome" 
                            value={nome}  
                            className={style.textBoxNome} 
                            onChange = {handleNomeChange}
                            >
                            </input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Descrição:</label>
                            <textarea maxLength={255} id="descricao" name="descricao" value={descricao} className={style.textBoxDescricao} 
                             onChange={handleDesricaoChange}
                            ></textarea>
                        </div>                     
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Salvar</Botao>
                        <Link to="/categorias" className={style.link}>Voltar</Link>
                    </div>     
                </div>
            </form>
        </div>
    );
}
export default CategoriaEditor;

