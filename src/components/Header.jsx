import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div >
         <Navbar className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://assets.materialup.com/uploads/c3c608ec-3634-4311-b2c6-fdb9a576c481/preview.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:"5px"}}
            />{' '}
            <span style={{color:"rgb(51, 94, 107)",fontWeight:"bold"}}>Discount Calculator</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header