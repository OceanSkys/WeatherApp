import { Outlet, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';

export default function HeaderFooter(){

    return (
        <div>
            <div className=''>
                <Navbar bg="light" expand="lg">
                    <NavLink style={{textDecoration: 'none', width: '150px', height: 'auto', color: 'black'}} className='fs-3 mx-5 py-2 font1' to='/'>Weather App</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight: '20px'}}/>
                    <SearchBar/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav">
                            <div className='nav-div'>
                                <NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink>
                                <NavLink style={{textDecoration: 'none'}} to='/Contact'>Contact</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
};