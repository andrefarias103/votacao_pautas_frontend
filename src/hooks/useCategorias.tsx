import { useEffect, useState } from "react";

export interface IDadosCategoria { 
        id: string, 
        nome: string, 
        descricao: string, 
}

export const useCategorias = () => {
    const [listaCategorias, setCategorias] = useState<IDadosCategoria[]>([]);

    useEffect(() => {
         fetch("http://localhost:3010/categorias")
            .then((response) => response.json())
            .then((data) => setCategorias(data));
    }, []);

    return listaCategorias;

};