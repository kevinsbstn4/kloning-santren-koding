import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Card2 extends Component{
    state= {
        angka: 0
    }

      Tambah = () => {
        this.setState({
            angka : this.state.angka + 1
        })
    }
        Kurang = () => {
            this.setState({
                angka : this.state.angka - 1
            })

    }
    render(){
        return(
         
            <div>
                <Card style={{width:300}}>
                    <CardTitle><h1>{this.state.angka}</h1></CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>Card Text</CardText>
                    <Button onClick={()=> this.Tambah()}>Tambah</Button>
                    <Button onClick={()=> this.Kurang()}>Kurang</Button>
                </Card> 
            </div>
           
        );

        }
    }

   