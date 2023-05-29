import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {routes} from "../../urls/urls";

const Header = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userSlice);

    const handleLogout = () => {
        // dispatch(logout());
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to={routes.home} className={'me-5'}>
                <i className="fas fa-list-ul me-3 ms-2"></i>
                Todo For Groups
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to={routes.home} className={'me-1'}>
                        <i className="fas fa-home me-2 ms-2"></i>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to={routes.createGroup} className={'me-1'}>
                        <i className="fas fa-plus-square me-2 ms-2"></i>
                        Create
                    </Nav.Link>
                    <Nav.Link as={Link} to={routes.findGroup} className={'me-1'}>
                        <i className="fas fa-search me-2 ms-2"></i>
                        Find
                    </Nav.Link>
                        <NavDropdown  title={<><i className="fas fa-user-circle me-2 ms-2"></i>{user.username}</>} id="nav-dropdown">
                            <NavDropdown.Item onClick={handleLogout} >Logout</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
