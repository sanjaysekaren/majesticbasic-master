import React, { Component } from 'react'
import { Nav,Navbar,NavItem,Badge } from "react-bootstrap";
import {Drawer} from 'antd';

 class Menu extends Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
      this.setState({
          visible: true,
      });
  };

  onClose = () => {
    this.setState({
        visible: false,
    });
};

  render() {
    return (
        <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Book-Shop</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              Contact Us
            </NavItem>
            
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">
              Admin
            </NavItem>
            <NavItem eventKey={2} href="/cart">
              Your Cart
              {(this.props.cartItemsNumber) >0 ? (<Badge className="badge">{this.props.cartItemsNumber}</Badge>) : ('')} 
            </NavItem>
            <NavItem eventKey={3} href="/usercart" >
              <img src="https://cdn4.iconfinder.com/data/icons/ios7-active-2/512/Basket.png" style={{ width: 25, height: 35 }}></img>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    )
  }
}

export default Menu;