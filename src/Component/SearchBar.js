import React, { Component } from 'react'

class SearchBar extends Component{
    render(){
        return(
            <div className="search">
            <input className='inputSearch' placeholder="Filter for what you're looking for" onChange={this.props.CameraSearch}></input>
            </div>
        )
    }
}
export default SearchBar;