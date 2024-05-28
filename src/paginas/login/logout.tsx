import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutenticacaoContexto } from '../../contexto/autenticacao/autenticacaoContexto';

const Logout: React.FC = () => { 

    const navigate = useNavigate();

    const autenticacao = useContext(AutenticacaoContexto);

    useEffect(() => {
        const handleLogout = async () => {
            await autenticacao.logout();
            navigate('/');
        } 
        handleLogout(); 
    }, [])

    return (
        <div>logout</div>
  )
}

export default Logout;
