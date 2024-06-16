import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navigation()  {
  return (
    <Nav className="justify-content-center my-5 navigation">
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Brainstorming</NavLink>
      </NavItem>
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Diagramming</NavLink>
      </NavItem>
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Meetings & Workshops</NavLink>
      </NavItem>
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Scrum Events</NavLink>
      </NavItem>
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Mapping</NavLink>
      </NavItem>
      <NavItem className='nav-item-custom'>
        <NavLink href="#" className="nav-link-custom active">Research & Design</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;