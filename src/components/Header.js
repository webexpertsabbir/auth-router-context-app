import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // const validUser = user.user;
    // console.log(validUser)

    const handelSingOut = () =>{
        logOut()
        .then(() => { })
        .catch(error => console.error(error)) 
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome, {user.email} </span>}
                {
                    user?.uid &&
                    <button onClick={handelSingOut} className="btn btn-xs">log Out</button>
        
                }


            </div>
        </div>
    );
};

export default Header;