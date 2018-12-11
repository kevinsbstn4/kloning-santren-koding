import React, {Component} from'react';
import NavBar from '../component/Navbar.js'
import Jumbotron from '../component/Jumbotron'
import Card2 from '../component/Card2.js'
import './Home.css'

export default class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron/>
                <center>
                <h1 className="top">Daftar Kajian Koding Rutin</h1>
                </center>
                <Card2/>
            </div>
        );
    }
}