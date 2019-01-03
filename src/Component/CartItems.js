import React, {Component} from 'react';
import { Card, CardTitle} from 'reactstrap';
import "../App.css"
class CartItems extends Component{
    render(){
        return(
             <div>
             <Card>
                 <CardTitle className="otherText">{this.props.newCamera.name}</CardTitle>

             </Card>
 
                
            </div> 
        )
    }
}
export default CartItems;

    