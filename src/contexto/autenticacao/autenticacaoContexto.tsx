import { createContext } from 'react';
import { TUsuarios } from '../../interfaces/TUsuarios';

export type AutenticacaoContextoType = {
    usuario: TUsuarios | null;
    login: (login: string, senha: string) => Promise<boolean>;
    logout: () => void;
}

export const AutenticacaoContexto = createContext<AutenticacaoContextoType>(null!);