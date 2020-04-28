// @ts-ignore
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from "react-router-dom";

export default function NavEl(){
    const favorite_arr = useSelector(state=>state.AppReducer.favorite_arr);
    const full_cities_list = useSelector(state=>state.AppReducer.full_cities_list);
    const favorite_arr_name=full_cities_list.filter(el=>{
        return favorite_arr.indexOf(el.id)!=-1;
    })
    const dispatch =useDispatch();
    return( <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Main</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Favorite" id="basic-nav-dropdown">
                    {favorite_arr_name.map(el=>{
                        return(<NavLink to={'/city/'+el.id} className='dropdown-item' key={el.id}>{el.name}</NavLink>)
                    })}
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}