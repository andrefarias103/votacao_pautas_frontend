import { FormEvent, useState } from "react";
import Botao from "../../components/botao";
import Menu from "../../components/menu";
import { mCreateCategoria } from "../../hooks/useCategorias";
import style from "./css/categoria-editor.module.css";

function CategoriaEditor()  {

    const [nome, setNome] = useState<string | undefined>();
    const [descricao, setDescricao] = useState<string |undefined>();
;
    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setNome(event.target.value);
    }

    const handleDesricaoChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setDescricao(event.target.value);
    }    
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        mCreateCategoria({nome, descricao});
      };      

    return (
        <div className="wrapper">
            <Menu />     
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Nome:</label>
                            <input type="text" name="nome" value={nome}  className={style.textBoxNome} onChange ={handleNomeChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Descrição:</label>
                            <textarea maxLength={255} id="descricao" name="descricao" value={descricao} className={style.textBoxDescricao} onChange={handleDesricaoChange}></textarea>
                        </div>                     
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Salvar</Botao>
                        <Botao>Voltar</Botao>
                    </div>                           
                </div>
            </form>
        </div>
    );
}
export default CategoriaEditor;

