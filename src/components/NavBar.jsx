import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 

function NavBar() {
  
  const [token, setToken] = useState(false); 
  
  const total = 25000;

  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> ¡Pizzería Mamma Mia!</Navbar.Brand>          
          <Nav className="me-auto">
            
            <Button variant="outline-light" className="ms-2">🍕Home</Button>

            {token ? (
              <>
                <Button variant="outline-light" className="ms-2">🔓 Profile</Button> 
                
                <Button variant="outline-light" className="ms-2" onClick={() => setToken(false)}>🔒 Logout</Button>
              </>
            ) : (
              <>
                
                <Button variant="outline-light" className="ms-2" onClick={() => setToken(true)}>🔐 Login</Button>
                <Button variant="outline-light" className="ms-2">🔐 Register</Button>
              </>
            )}
          </Nav>
          <Nav>
            
            <Button variant="outline-info">🛒 Total: ${total.toLocaleString('es-CL')}</Button>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;