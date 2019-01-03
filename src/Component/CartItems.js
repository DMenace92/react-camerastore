import React, {Component} from 'react';
import { Card, CardTitle, CardText, Button} from 'reactstrap';

class CartItems extends Component{
    render(){
        return(
             <div>
             <Card>
                 <CardTitle>{this.props.newCamera.name}</CardTitle>
                 <CardTitle>Subtotal: ${this.props.newCamera.price}</CardTitle>
                 <CardTitle>{this.props.newCamera.rating}</CardTitle>
                 <CardText></CardText>
                 <Button className="checkoutButton">Checkout</Button>
     
      </Card>
 
                
            </div> 
        )
    }
}
export default CartItems;

     {/* <h1 className="text1">your cart</h1>
                <h2>Subtotal: $</h2>
                <h2>Tax: $</h2>
                <h1>Total: $</h1>
                <button className="checkoutButton">Checkout</button> */}