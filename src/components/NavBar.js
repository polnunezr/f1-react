import { Outlet } from "react-router-dom";
import {
  Navbar,
  Button,
  Form,
  FormControl,
  Container,
  Nav,
} from "react-bootstrap";
export function NavBar() {
  return (
    <main>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-5-1.png
"
              width="100"
              height="25"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/drivers">Drivers</Nav.Link>
              <Nav.Link href="/drivers">Drivers Standings</Nav.Link>
              <Nav.Link href="/drivers">Team Standings</Nav.Link>
              <Nav.Link href="/drivers">Season schedule</Nav.Link>
              <Nav.Link href="/drivers">TOP 20 DRIVERS OF ALL TIME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
