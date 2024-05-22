import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Botao from "../../components/botao";
import Menu from "../../components/menu";
import { IDadosCategoria, useCategorias } from "../../hooks/useCategorias";
import { PautaPorId, atualizaPauta } from "../../hooks/usePautas";
import { SessaoPorId } from "../../hooks/useSessoes";
import style from "./css/pauta-editor.module.css";
import getCurrentDateTime from "./utils/dataHora.utils";

const PautaEditor: React.FC = () => {

    const navigate = useNavigate();

    const { id } = useParams();    

    const [titulo, setTitulo] = useState<string | undefined>();
    const [descricao, setDescricao] = useState<string |undefined>();
    const listaCategorias = useCategorias();
    const [categoriaId, setCategoriaId] = useState<number |undefined>();
    const [dataHoraInicio, setDataHoraInicio] = useState<string |undefined>(getCurrentDateTime());
    const [dataHoraFim, setDataHoraFim] = useState<string |undefined>(getCurrentDateTime());

    useEffect(() => {
        async function carregarDados() {
            const agenda = await PautaPorId(id);         
            if (agenda) {
                setTitulo(agenda.titulo);
                setDescricao(agenda.descricao);                
                setCategoriaId(agenda.categoriaId);
                const sessao = await SessaoPorId(agenda.sessaoId);
                if (sessao) {
                    setDataHoraInicio(sessao.dataHoraInicio); 
                    setDataHoraFim(sessao.dataHoraFim);
                }
              }
        }
        carregarDados();
    }, [id]);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setTitulo(event.target.value); }
    const handleDesricaoChange = (event: React.ChangeEvent<HTMLTextAreaElement> ) => { setDescricao(event.target.value); }    
    const handleDataHoraInicioChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setDataHoraInicio(event.target.value); }    
    const handleDataHoraFimChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setDataHoraFim(event.target.value); }    
    const handleCategoriaChange = (event: { target: { value: any } }) => { setCategoriaId(event.target.value); };

     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {        
        event.preventDefault();
        atualizaPauta({id, titulo, descricao, categoriaId, dataHoraInicio, dataHoraFim});
        navigate(`/pautas/index`); 
      };        

    return (
        <div className="wrapper">
            <Menu />     
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
                        <Link to="/pautas/index" className={style.link}>Voltar</Link>
                    </div>                           
                </div>
            </form>            
            {/* <form onSubmit={handleSubmit}> 
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
                        <Link to="/categorias/index" className={style.link}>Voltar</Link>
                    </div>     
                </div>
            </form> */}
        </div>
    );
}
export default PautaEditor;

