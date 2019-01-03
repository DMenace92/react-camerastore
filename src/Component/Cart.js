import React, {Component} from 'react';
import CartItems from './CartItems';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';



class Cart extends Component{
    render(){
    
        console.log(this.props.CartItems)
        const newCamera = this.props.CartItems.map(camera=> <CartItems key={camera.id} newCamera={camera}/>)
        return(
            <div>
            <Card className="CardBody" body inverse color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardBody>
        {newCamera}
                <h2>{this.props.CartItems.reduce((sum,camera)=>{
                    return sum + camera.price
                },null)}
               </h2>
        </CardBody>
        <CardText></CardText>
        <Button color="secondary">Button</Button>
      </Card>
               
                
            </div>
           
        )
    }
}
export default Cart



 //<h1>book is in Cart</h1>
   //             {newCamera}
   //             <h2>{this.props.CartItems.reduce((sum,camera)=>{
    //                return sum + camera.price
    //            },0)}
   //             </h2>