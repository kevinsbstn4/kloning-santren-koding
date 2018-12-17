import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Conter from'./pages/Conter.js';
import Kajian from'./pages/Kajian.js';
import Kitab from'./pages/Kitab.js';
import Mondok from'./pages/Mondok.js';
import NavBar from'./component/Navbar.js';
import WebApp from'./pages/App';
class App extends Component {
  //state={
  //  isPage:"Home"
 // }
 // changePage=(parameter)=>{
   // this.setState({
  //    isPage : parameter
 //   })
 // }


  render(){
    // const {isPage} = this.state
    return(
      <div>
        <WebApp/>
      </div>
    )
    }
  }
//   if(isPage === "Home"){
//   return (<div>><NavBar layout={this.changePage}/><Home /></div>)
//  }else if(isPage === "Kajian"){
//   return (<div><NavBar layout={this.changePage} /><Kajian /></div>)
//  }else if(isPage === "Mondok"){
//    return (<div><NavBar layout={this.changePage} /><Mondok /></div>)
//  }else if(isPage === "Kitab"){
 //   return (<div><NavBar layout={this.changePage}/><Kitab /></div>)
//  }else{
//    return <h1>halaman tidak ditemukan</h1>
 // }
// } 

//}
 

export default App;

