import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default class jumbotron extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1>Sebastian Empire</h1>
                <p>This is modified</p>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}