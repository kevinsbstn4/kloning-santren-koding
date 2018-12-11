import React, {Component} from 'react';
import{
    Collapse, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
link} from 'reactstrap';
   
import './Navbar.css'
import { Button } from 'reactstrap';
export default class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand className="nav"><img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc"/>Santren Koding</NavbarBrand>
                    <Nav className="atas">
                        <NavItem className="tul">
                            <NavLink>
                                Kajian Koding 
                            </NavLink>
                        </NavItem>
                        <NavItem className="tul">
                            <NavLink>
                                Mondok Koding 
                            </NavLink>
                        </NavItem>
                        <NavItem className="tul">
                            <NavLink>
                            Kitab Koding
                                </NavLink>
                                </NavItem>
                        <Button outline color="primary">Masuk/Daftar</Button>{' '}
                    </Nav>
                </Navbar>

            </div>

        );
    }
}