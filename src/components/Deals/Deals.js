import React, { useEffect, useState } from 'react';

const Deals = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5200/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div className="pt-5">
            <h1>This is Deals</h1>
        </div>
    );
};

export default Deals;