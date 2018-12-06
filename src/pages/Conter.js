import React , {Component} from 'react'
export default class Counter extends Component{
    state ={
        angka :0,
        nama : "Kevin"
    }
    render(){
        return(
            <div>
                <h1>{this.state.nama}</h1>
                <button>+</button>
                <button>-</button>
            </div>
        );

    }
}