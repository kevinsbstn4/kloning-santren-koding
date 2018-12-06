import React, {Component} from'react';
import NavBar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron'

export default class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron/>
            </div>
        );
    }
}