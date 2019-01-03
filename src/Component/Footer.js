import React, {Component} from 'react';
import { Navbar } from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
            <Navbar color="primary" light expand="md">Footer</Navbar>
             </div>
        )
    }
}
export default Footer;