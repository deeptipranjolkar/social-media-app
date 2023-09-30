import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Social media website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">About us</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
          
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success">Sign in </Button>
            <Button variant="outline-success">Sign up </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  NavBarComponent;