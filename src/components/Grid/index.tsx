// import axios from "axios";
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useCategoriasPorNome } from "../../hooks/useCategorias";
import Botao from "../botao";
import style from "./grid.module.css";

function Grid() {

    const navigate = useNavigate();

    const [categoriaFiltro, setCategoriaFiltro] = useState();
    const listaCategorias = useCategoriasPorNome({ nome: categoriaFiltro });
    
    // const [totalRows, setTotalRows] = useState(0);
    //const [loading, setLoading] = useState(false);

    const customStyles = {
        headRow: {
          style: {
            backgroundColor: 'rgba(239, 127, 23, 1)',   
            minHeight: '40px',        
          },
        },
        headCells: {
          style: {
            fontSize: '14px',
            fontFamily: "sans-serif",
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        cells: {
            style: {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: "100%"
            }
        }
      };    

    const columns = [
        {
            name: 'Id',
            selector: (row: { id: string; }) => row.id,
            sortable: true,
            width: "4rem",
            omit: true,
        },
        {
            name: 'Nome',
            selector: (row: { nome: string; }) => row.nome,
            sortable: true,
            width: "20rem",
            headCells: {
                style: {
                  fontSize: '20px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  paddingLeft: '0 8px'
                },
              },
        },
        {
            name: 'Descrição',
            selector: (row: { descricao: string; }) => row.descricao,
            sortable: true,
            width: "30rem"
        },
        {
            cell: (row: { id: any; }) => <>
                <button onClick={() => clickEditar(row.id)} className="btn-editar">Editar</button>
                <button onClick={() => clickExcluir(row.id)} className="btn-excluir m-left">Excluir</button>
            </>,        
            backgroundColor: "rgba(237, 245, 248, 1)",    
            // width: "100%",
            heigth: "10px",
            right: true
        }
    ];    

    const paginationOptions = {
        rowsPerPageText: "Registros por página: ",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    }

    function clickNova() {
        alert('clicou no botao Nova');
        return navigate("/categorias/index");
    }

    const clickEditar = (id: number) => {
        return navigate("/categorias/nova/index");
    }

    // function clickEditar(id: number){
    //     //alert('editar '+ id);
    //     return navigate("/");
    // }

    function clickExcluir(id: number){
        alert('excluir ' + id);
    }

    const handleCategoriaChange = (event: { target: { value: any } }) => {
        setCategoriaFiltro(event.target.value);
      };        

    
    // async function ListarDadosAPI(page: number) {
    //     setLoading(true);
    //     setData(dados);

    //     const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=10&delay=2`);

    //     // const timeout = setTimeout(() => {
    //     //     setData(response.data.data)
    //     //     setTotalRows(response.data.totalRows);
    //     //     setLoading(false);            
    //     // }, 5000);

    //     setData(response.data.data)
    //     setTotalRows(response.data.totalRows);
    //     setLoading(false);
    // }

    // async function handlePerRowsChange(newQtdPage: number, page: number) {
    //     setLoading(true);
    //     setData(dados);

    //     const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newQtdPage}&delay=5`);

    //     setData(response.data.data);
    //     setLoading(false);
        
    // }


    useEffect(() => {
        handleCategoriaChange({ target: { value: '' } })
    }, [] );

	return (
        <div>
            <div className={style.pesquisa}>
                <label>Categoria:</label>
                <input type="text" 
                    className={style.textBox} 
                    onChange={handleCategoriaChange} 
                    value={categoriaFiltro}>                    
                </input>
                {/* <Botao type="button" onClick={clickNova()}>Nova Categoria</Botao> */}
                <Botao type="button">Nova Categoria</Botao>
            </div>        
            <div>
                <DataTable
                    columns={columns}
                    data={listaCategorias}
                    pagination={true}
                    paginationComponentOptions={paginationOptions}
                    noDataComponent={"Nenhum registro encontrado"}
                    // onChangeRowsPerPage={handlePerRowsChange}
                    // onChangePage={handlePageChange}
                    // paginationTotalRows={totalRows}
                    paginationServer={true}
                    fixedHeader={true}
                    // progressPending={loading}
                    //conditionalRowStyles={conditionalRowStyles}
                    customStyles={customStyles}
                />            
            </div>
        </div>
	);
}

export default Grid;