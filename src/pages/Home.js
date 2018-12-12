import React, {Component} from'react';

import Jumbotron from '../component/Jumbotron'
import Card2 from '../component/Card2.js'
import './Home.css'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar.js'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron/>
                <center>
                <h1 className="top">Daftar Kajian Koding Rutin</h1>
                </center>
                <Card2/>
            </div>
        );
    }
}