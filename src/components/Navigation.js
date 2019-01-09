import React, {Component} from "react";
import logo from '../logo.svg';

class Navigation extends Component {
    render() {
        return (

            <div>
            	<nav className= "navbar navbar-dark bg-dark text-white container-fluid">
                <span className="col-xs-4 col-md-2 ">
                   {this.props.titulo.toUpperCase()} 
                   <span className= "badge badge-pill badge-light ml-2">
                      {this.props.cantidad}
                    </span>
                  </span>
                  <span className="col-12 col-md-2"> 
                     <img src={logo} className="App-logo" alt="logo" />
                  </span>
            	</nav>
            </div>
        )
        
    }
}

export default Navigation;