import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import Logo from '../logo.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width=""
              height="50"
              className="d-inline-block align-top"
            />{' '}
          Grocerilla
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header