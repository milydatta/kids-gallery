import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div>
             <h3 className="mail">Email:{loggedInUser.email}</h3>
            <h1 className="m-5">Checkout</h1>
        </div>
    );
};

export default Checkout;