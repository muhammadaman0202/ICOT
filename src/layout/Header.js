import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import ''

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">ICOT PROGRAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link  className='setlink' to="/">Home</Link></Nav.Link>
              <Nav.Link  ><Link className='setlink' to="/service">Service</Link></Nav.Link>
              <Nav.Link ><Link className='setlink' to="/about">About</Link></Nav.Link>
              <NavDropdown title="Category" id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Website</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">Graphic Design</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Ms Office</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">Website About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link to="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} to="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}

export default Header