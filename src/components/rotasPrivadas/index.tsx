// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../hooks/useAutenticacao';


interface RotasPrivadasProps {
  component: React.ComponentType<any>;
  [rest: string]: any;
}

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, children, ...rest }) => {
//   return (
//     <Route {...rest} children = { (props: ProtectedRouteProps) => {(getToken() ? <Component {...props}></Component> : <Navigate to="/login"> </Navigate>)} } > 

//     </Route>

const RotasPrivadas: React.FC<RotasPrivadasProps> = ({ children }) => {

    const token = getToken();

    return token ? children :  <Navigate to="/login" />
        
};

export default RotasPrivadas;        


// <Route
        //   {...rest}
        //   render ={(props: ProtectedRouteProps) =>
        //     getToken() ? <Component {...props} /> : <Navigate to="/login" />
        //   }
        // />
