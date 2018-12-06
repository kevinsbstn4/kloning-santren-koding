import React,{Component} from 'react'
import '../App.css'
class Header extends Component{
    render(){
        return(
            <div classname="App">

            <h1>nama saya: {this.props.nama}</h1> 
            <h1>Alamat : {this.props.alamat}</h1>
            <h1>Hobby : {this.props.hobby}</h1>
            <h1>Cita Cita : {this.props.cita} </h1>
            <h1>Umur : {this.props.umur}</h1>




            </div>
        )
    }
}

export default Header