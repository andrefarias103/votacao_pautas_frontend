import { useContext } from "react";
import Login from "../../paginas/login";
import { AutenticacaoContexto } from "./autenticacaoContexto";

export const RequisitosAutenticacao = ({ children }: {children: JSX.Element}) => {
    const auth = useContext(AutenticacaoContexto);
    if (!auth.usuario) {
        return <Login></Login>;
    }
    return children;
}