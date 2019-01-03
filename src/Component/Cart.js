import React, {Component} from 'react';
import CartItems from './CartItems';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import "../App.css"


class Cart extends Component{
    render(){
      
    
        console.log(this.props.CartItems)
        const newCamera = this.props.CartItems.map(camera=> <CartItems key={camera.id} newCamera={camera}/>)
       
        
      
        return(
            
            <div>
          
            <Card className="CardBody" body inverse color="warning">
        <CardTitle className='CartText'>Your Cart</CardTitle>
        <CardBody>
        
        
        {newCamera}
         <h6>Subtotal: ${this.props.CartItems.reduce((sum,camera)=>{
                    return sum + camera.price 
                },0).toFixed(2) }</h6>
        
         <h6>Tax: ${this.props.CartItems.reduce((tax,camera)=>{
                    return tax + camera.price * 0.086
                },0).toFixed(2)}</h6>      

         <h4>Total: ${this.props.CartItems.reduce((tax,camera)=>{
                    return tax + camera.price * 1.086
                },0).toFixed(2) }</h4>             
                
                
               
                
                
                
        </CardBody>
        <CardText></CardText>
        <Button color="secondary">Button</Button>
      </Card>
      
               
                
            </div>
           
        )
    }
}
export default Cart





