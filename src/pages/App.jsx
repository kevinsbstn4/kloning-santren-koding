import React,{Component} from 'react';
import Home from './Home.js'
import Kajian from './Kajian'
import NavBar from '../component/Navbar'
import Kitab from './Kitab'
import Mondok from './Mondok'
import {Switch, Route, BrowserRouter, Link}  from 'react-router-dom'


export default class WebApp extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/kajian" component={Kajian}/>
                        <Route path="/mondok" component={Mondok}/>
                        <Route path="/kitab" component={Kitab}/>
                    </Switch>
                </div>
            </div>
        )
    }
}