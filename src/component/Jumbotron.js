import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import './Jumbotron.css'

export default class jumbotron extends Component{
    render(){
        return(         
            <div className="mboh">
                 <center>
                <Jumbotron fluid>
                <Container fluid>
                <h1>Santren Koding</h1>
                <p>Intensive Coding Bootcamp for Yatim & Dhuafa</p>
                <Button color="success">Mulai Belajar</Button>{' '}
                </Container>
                </Jumbotron>
                </center>
            </div>
           
        );
    }
}