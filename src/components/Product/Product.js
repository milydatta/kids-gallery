import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = (props) => {
    const {imgUrl, name, price} = props.product;
    const history = useHistory()
  
    
    const handleBuyNow = () => {
         history.push('/checkout');
    }
    
    return (
        <div className="pt-5">
            <CardGroup>
              <Card className="pl-5 pr-5 ml-5 mt-5">
                  <Card.Img variant="top" style={{width:200,height:200}} src={imgUrl} alt=""/>
                   <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     </Card.Body>
                     <Card.Footer>
                       <p> {price} <Button onClick={handleBuyNow} className="float-right" variant="success">BUY NOW</Button></p>
                     </Card.Footer>
             </Card>
             </CardGroup>
            </div>
        
    );
};

export default Product;