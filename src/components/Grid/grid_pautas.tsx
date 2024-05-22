import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { excluirPauta, usePautasPorNome } from "../../hooks/usePautas";

interface GridProps {
    nome: string | undefined;
  }

const GridPautas: React.FC<GridProps> = ({ nome }) => {

    const navigate = useNavigate();

    const listaPautas = usePautasPorNome({ nome });

    const clickEditar = (id: number) => {
        navigate(`/pautas/editar/index/${id}`); 
    }   
    
    async function clickExcluir(id: number) {
      if (id) {
        excluirPauta({id});    
        toast.success("Pauta excluída com sucesso");
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
            selector: (row: { id: string; }) => row.id,
            sortable: true,
            width: "0rem",
            omit: true,
        },
        {
            name: 'Título',
            selector: (row: { titulo: string; }) => row.titulo,
            sortable: true,
            width: "17rem",
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
            name: 'Descricao',
            selector: (row: { descricao: string; }) => row.descricao,
            sortable: true,
            width: "17rem",
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
                    data={listaPautas}                
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

export default GridPautas;