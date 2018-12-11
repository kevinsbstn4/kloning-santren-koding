import React, { Component } from 'react'

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,CardGroup } from 'reactstrap';
import './Card2.css'

export default class Card2 extends Component{
   // state= {
       //  angka: 0
  //  }

     //  Tambah = () => {
        // this.setState({
           //  angka : this.state.angka + 1
     //    })
  //   }
       //  Kurang = () => {
           //  this.setState({
                // angka : this.state.angka - 1
          //   })

  //   }
    render(){
        return(       
            <div className="pinggir">
            <title>Daftar Kajian Koding Rutin</title>
                <CardDeck>
                <Card >
                    <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg
" alt="Card image cap" />
                    <CardBody className="juh" >
                    <CardTitle>Kajian Koding #3</CardTitle>
                    <CardText className="isi">ReactJS dan Firebase Auth/Hosting</CardText>
                    <CardText className='cornerMessage'>By Santren Koding</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
                    <CardBody className="juh">
                    <CardTitle>Kajian Koding #2</CardTitle>
                    <CardText className="lol">html, css, boostrap dasar</CardText>
                    <CardText className='cornerMessage'>By Santren Koding</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
                    <CardBody className="juh">
                    <CardTitle >Kajian Koding #1</CardTitle>
                    
                    <CardText className="isi">Belajar Laravel Dasar</CardText>
                    <CardText className='cornerMessage'>By Santren Koding</CardText>
                    </CardBody>
                </Card>
                </CardDeck>
                <center>
                <Button className="Margin.bottom"outline color="success">Lihat Seluruh Kajian Koding</Button>{' '}
                </center>
               
               
                {/* <Card style={{width:300}}>
                    <CardTitle><h1>{this.state.angka}</h1></CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>Card Text</CardText>
                    <Button onClick={()=> this.Tambah()}>Tambah</Button>
                    <Button onClick={()=> this.Kurang()}>Kurang</Button>
                </Card>  */}
            </div>
           
        );

        }
    }
