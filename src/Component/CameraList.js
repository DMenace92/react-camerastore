import React, { Component } from 'react'
import { Card, Button, CardTitle, CardImg } from 'reactstrap';
import "../App.css"
class CameraList extends Component{
   
    render(){
        
        return(
            
            <div className='container'>
                
                {this.props.cameras.map(camera =>
                <div className="cards">
                    
                    <Card className="imgBody"key={camera.id} value={camera.id}>
                        <CardTitle>{camera.name}</CardTitle>
                        <CardTitle>price ${camera.price}</CardTitle>
                        <CardImg src={camera.picture} />
                        <CardTitle>{camera.rating}</CardTitle>
                        <Button onClick={()=> this.props.addCamera(camera.id)} color='primary'>Add to Cart</Button >
                    </Card>
                </div>
                )}
                
            </div>
            
        )
    }
}
export default CameraList;