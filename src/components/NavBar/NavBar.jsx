import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <Navbar bg="none" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>Ticket 2 Bike</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarButton" />
          <Navbar.Collapse id="navbarButton">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              
              {/* <Nav.Link as={Link} to={"/on-sale"}>Ofertas</Nav.Link> */}
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/category/1"}>Mountain Bike</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/2"}>Ruta</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/3"}>Gravel - CX</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/category/4"}>Repuestos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/category/5"}>Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Dale!</Button>
            </Form>
          </Navbar.Collapse>
          <div id='cartButton'><CartWidget CartCount={4}/></div>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;