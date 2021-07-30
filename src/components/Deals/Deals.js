import React from 'react';
import Header from '../Header/Header';

const Deals = () => {
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch('https://aqueous-depths-66687.herokuapp.com/product')
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
    // }, [])

    return (
        <div>
            <Header/>
            <h1 className="pt-5">This is Deals</h1>
        </div>
    );
};

export default Deals;