import React, { Component } from 'react';
import Navbars from './Component/Navbars.js';
import CameraList from './Component/CameraList.js';
import SearchBar from './Component/SearchBar.js';
import Footer from './Component/Footer'
import Cart from './Component/Cart'
import './App.css';


class App extends Component {
  state = {
    CartItems: [],
    cameras: [],
    total: 0,
    filterCameras: ''
  }
   async componentDidMount (){
     const res = await fetch('http://localhost:8082/api/cameras')
     const json = await res.json()
     this.setState({cameras: json})
     console.log(json)
     
   }
   CameraSearch = (e) => {
     this.setState ({
       filterCameras: e.target.value
       
     })
    }
     addCamera = (id) => {
       const singleCamera = this.state.cameras.filter(camera => camera.id === id)
       console.log(singleCamera)
       this.setState(prevState => {
         console.log(prevState)
         let CartItems = this.state.CartItems
         for(let i = 0; i < this.state.cameras.length; i++){
           if(this.state.cameras[i].id === id){
             CartItems.push(this.state.cameras[i])
          
           }
         }
         return {CartItems};
         
       })
     }
     removeItemFromBasket(cameraId) {
      const camera = this.stat.cameras.filter(camera => camera.id !== cameraId)
      this.setState({ camera })
      }

    
     
   
  render() {
    return (
      <div className="App">
        <Navbars />
        <CameraList cameras={this.state.cameras.filter(camera => camera.name.includes(this.state.filterCameras))}
          addCamera={this.addCamera}
          />

       <SearchBar CameraSearch={this.CameraSearch} />
       <Cart CartItems={this.state.CartItems} camera={this.removeItemFromBasket}/>
       
       <Footer />

       
      </div>
    );
  }
}

export default App;
