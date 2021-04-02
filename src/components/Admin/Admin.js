import React from 'react';
import { Button } from 'react-bootstrap';
import products from '../Home/Home';

const Admin = () => {
    const handleAddProduct = () => {
        fetch('http://localhost:5200/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products[0])
        })
    }
    return (
        <div className="pt-5">
           <Button onClick={handleAddProduct}>Add Product</Button>
        </div>
    );
};

export default Admin;