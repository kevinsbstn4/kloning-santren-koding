import React, {Component} from'react';
import NavBar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron'
import Card2 from '../component/Card2.js'

export default class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron/>
                <Card2/>
            </div>
        );
    }
}