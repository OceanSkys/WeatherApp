import { Outlet, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function HeaderFooter(){

    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <NavLink style={{textDecoration: 'none', width: '150px', height: 'auto', color: 'black'}} className='fs-1 mx-5 py-2 font1' to='/'>Jeremy T.</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <SearchBar /> */}
                    <Nav className="me-auto nav">
                        <div className='nav-div'>
                            <NavLink to='/'>Home</NavLink>
                            {/* <NavLink to='/MyProjects'>My Projects</NavLink> */}
                            <NavLink to='/Contact'>Contact</NavLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        <div>
            <Outlet/>
        </div>
        </div>
    )
};