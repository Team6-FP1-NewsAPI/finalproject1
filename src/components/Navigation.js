import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import SearchBar from "./SearchBar";
import articles from "../pages/indonesia/IndonesiaNews";

const Navigation = ({ onSearch }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/programming">
              Programming
            </Nav.Link>
            <Nav.Link as={Link} to="/covid">
              COVID-19
            </Nav.Link>
            <Nav.Link as={Link} to="/saved">
              Saved
            </Nav.Link>
          </Nav>
          <SearchBar placeholder="Search..." data={articles} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
