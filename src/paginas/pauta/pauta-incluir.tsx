import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../../componentes/botao";
import { useCategorias } from "../../hooks/useCategorias";
import { createPauta } from "../../hooks/usePautas";
import { IDadosCategoria } from "../../interfaces/TCategorias";
import style from "./css/pauta-editor.module.css";
import getCurrentDateTime from "./utils/dataHora.utils";

function PautaIncluir()  {

    const navigate = useNavigate();

    const [titulo, setTitulo] = useState<string | undefined>();
    const [descricao, setDescricao] = useState<string |undefined>();
    const listaCategorias = useCategorias();
    const [categoriaId, setCategoriaId] = useState<number |undefined>();
    const [dataHoraInicio, setDataHoraInicio] = useState<string |undefined>(getCurrentDateTime());
    const [dataHoraFim, setDataHoraFim] = useState<string |undefined>(getCurrentDateTime());
;
    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setTitulo(event.target.value); }
    const handleDesricaoChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => { setDescricao(event.target.value); }    
    const handleDataHoraInicioChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setDataHoraInicio(event.target.value); }    
    const handleDataHoraFimChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setDataHoraFim(event.target.value); }    
    const handleCategoriaChange = (event: { target: { value: any } }) => { setCategoriaId(event.target.value); };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        createPauta({titulo, descricao, categoriaId: categoriaId, dataHoraInicio, dataHoraFim});
        navigate(`/pautas/`); 
      };      

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}> 
                <div className={style.AppStyle}>
                    <div className={style.container}>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Título:</label>
                            <input type="text" name="titulo" value={titulo}  className={style.textBox} onChange ={handleTituloChange}></input>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Descrição:</label>
                            <textarea maxLength={255} id="descricao" name="descricao" value={descricao} className={style.textBoxDescricao} onChange={handleDesricaoChange}></textarea>
                        </div>                   
                        <div className={style.areaCampos}>
                            <label className={style.label}>Categoria:</label>
                            <select name="categoria" className={style.textBox} value={categoriaId} onChange={handleCategoriaChange} >
                                {listaCategorias.map((option: IDadosCategoria) => (
                                    <option value={option.id}>
                                        {option.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={style.areaCampos}>
                            <label className={style.label}>Data Hora Início da Sessão:</label>
                            <input type="datetime-local" id="dataHoraInico" name="dataHoraInicio" value={dataHoraInicio} className={style.textBox} onChange={handleDataHoraInicioChange} />                            
                        </div> 
                        <div className={style.areaCampos}>
                            <label className={style.label}>Data Hora Fim da Sessão:</label>
                            <input type="datetime-local" id="dataHoraFim" name="dataHoraFim" value={dataHoraFim} className={style.textBox} onChange={handleDataHoraFimChange} /> 
                        </div>                                                   
                    </div>
                    <div className={style.areabotao}>
                        <Botao type="submit">Salvar</Botao>
                        <Link to="/pautas/" className={style.link}>Voltar</Link>
                    </div>                           
                </div>
            </form>
        </div>
    );
}
export default PautaIncluir;

