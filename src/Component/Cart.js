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
        <CardTitle>Your Cart</CardTitle>
        <CardBody>
        
        
        {newCamera}
         <h6>subtotal: {this.props.CartItems.reduce((sum,camera)=>{
                    return sum + camera.price 
                },0) }</h6>
        
         <h6>tax: {this.props.CartItems.reduce((tax,camera)=>{
                    return tax + camera.price * 0.086
                },0) }</h6>      

         <h6>total: {this.props.CartItems.reduce((tax,camera)=>{
                    return tax + camera.price * 1.086
                },0) }</h6>             
                
                
                
                
                
                
        </CardBody>
        <CardText></CardText>
        <Button color="secondary">Button</Button>
      </Card>
      
               
                
            </div>
           
        )
    }
}
export default Cart





