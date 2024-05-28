import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { excluirCategoria, useCategoriasPorNome } from "../../hooks/useCategorias";

interface GridProps {
  nome: string | undefined;
}

const GridCategoria: React.FC<GridProps> = ({ nome }) => {

    const navigate = useNavigate();

    const listaCategorias = useCategoriasPorNome({ nome });

    const clickEditar = (id: number) => {
      navigate(`/categorias/editar/${id}`); 
  }

  async function clickExcluir(id: number) {
      if (id) {
        excluirCategoria({id});     
      }
  }    

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
            selector: (row: { id: number; }) => row.id,
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


	return (     
            <div>
                <DataTable
                    columns={columns}
                    data={listaCategorias}
                    pagination={true}
                    paginationComponentOptions={paginationOptions}
                    noDataComponent={"Nenhum registro encontrado"}
                    paginationServer={true}
                    fixedHeader={true}
                    customStyles={customStyles}
                />            
            </div>
	);
}

export default GridCategoria;