import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Contexts';
import Leftside from './Leftside';

const Header = () => {
  const {muser,logoutGoogle,loginGoogle}=useContext(AuthContext)
  const handlelogin=()=>{
    loginGoogle()
    .then(result=>{
      const user=result.user;
    })
    .catch=(error)=>{
      console.log(error);
    }
  }
  const googleout=()=>{
    logoutGoogle()
    .then(()=>{

    })
    .catch=(error)=>{
       console.log(error)
    }
  }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
      <Container text-align-center justify-content-center align-item-center>
        <Navbar.Brand href="#home">Pragon News </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* <Nav.Link href="#link">{muser?.displayName}</Nav.Link> */}
            <NavLink>
              {
                muser?.displayName ?<> 
              {muser?.displayName}

              </>
                :
                <button onClick={handlelogin}>login</button>

                
              }
            </NavLink>
            <Nav.Link>

              {
                muser?.email ?<>
              <Image className='me-3' style={{height:'30px'}} roundedCircle src={muser.photoURL}></Image>
            <Button onClick={googleout}>Log out</Button>
              
              </>
              :<FaUser></FaUser>
              }
            </Nav.Link>
            

           

         
            
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='d-lg-none'>
            <Leftside></Leftside>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Header;