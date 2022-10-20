import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h2>My name is {
                user?.email && user.email
                } </h2>
        </div>
    );
};

export default Home;