import React , {Component} from 'react'
export default class Counter extends Component{
    state ={
        angka :0,
        makanan : [{
            nama:"bakso",
            harga:5000,
            level:["biasa","sedang","pedas"]
        },{
            nama:"sate",
            harga:15.000,
            level:["biasa","sedang","pedas"]
        },
        {
            nama:"ayam",
            harga:10.000,
            level:["biasa","sedang","pedas"]

        }]
            
    }
    tambah=()=>{
        this.setState({
            angka:this.state.angka+1
        })

    }
    kurang=()=>{
        this.setState({
            angka:this.state.angka-1
        })

    }
    render(){
        return(
            <div>
                 <h1>nama makanan :{this.state.makanan[0].nama}</h1>
                 <h1>harga :{this.state.makanan[0].harga}</h1>
                 <h1>level :{this.state.makanan[0].level[1]}</h1>
                 <h1>mau pesen berapa:{this.state.angka}</h1>
                 <button onClick={()=>this.tambah()}>+</button>
                <button onClick={()=>this.kurang()}>-</button>
            </div>
        );

    }
}