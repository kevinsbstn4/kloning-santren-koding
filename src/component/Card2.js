import React, { Component } from 'react'

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
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
            <div>
                <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg
" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Kajian Koding #3</CardTitle>
                    <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Kajian Koding #2</CardTitle>
                    <CardText>html, css, boostrap dasar</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Kajian Koding #1</CardTitle>
                    
                    <CardText>Belajar Laravel Dasar</CardText>
                    
                    </CardBody>
                </Card>
                </CardDeck>
                
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
