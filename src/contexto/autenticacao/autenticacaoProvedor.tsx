import { useEffect, useState } from "react";
import { loginAuthenticate, validateToken } from "../../hooks/useAutenticacao";
import { TUsuarios } from "../../interfaces/TUsuarios";
import { AutenticacaoContexto } from "./autenticacaoContexto";

export const AutenticacaoProvedor = ( {children}: { children: JSX.Element[]} ) => {

    const [usuario, setUsuario] = useState<TUsuarios | null>(null);

    useEffect( () => {
        const validaToken = async () => {
            const storageData=sessionStorage.getItem('authToken');
            if (storageData) {
                const data = await validateToken(storageData);      
                if (data.id) {
                    setUsuario(data);
                }
            }    
        }
        validaToken();

    },[]) ;


    const login = async (login: string, senha: string) => {
        const data = await loginAuthenticate(login, senha);
        if (data.id && data.token_acesso) {
            setUsuario(data);
            setToken(data.token_acesso);
            return true;
        }
        return false;
    }

    const logout = () => {
        setUsuario(null);
        setToken('');
    }

    const setToken = (token: string) => { 
        sessionStorage.setItem('authToken', token);
    }

    return (
        <AutenticacaoContexto.Provider value={{ usuario, login, logout}}>
            {children}        
        </AutenticacaoContexto.Provider>
    );
}