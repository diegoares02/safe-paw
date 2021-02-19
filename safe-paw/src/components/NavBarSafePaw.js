import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import '../styles/NavBarSafePaw.css'
import logo from '../images/logo.png'
function NavBarSafePaw() {
    return (
        <Navbar bg="light" variant="light" expand="sm">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Safe Paw</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/pets">Pets</Nav.Link>
                    <Nav.Link href="/people">People</Nav.Link>
                    <Nav.Link href="/hospitals">Hospitals</Nav.Link>
                    <Nav.Link href="/vaccines">Vaccines</Nav.Link>
                </Nav>
                <DropdownButton
                    menuAlign="right"
                    title="User"
                    id="dropdown-menu-session"
                    inline="true"
                >
                    <Dropdown.Item eventKey="1">Sign out</Dropdown.Item>
                </DropdownButton>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBarSafePaw;