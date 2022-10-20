import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Routes = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <div>Loading ....</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'>Log In</Navigate>
};

export default Routes;