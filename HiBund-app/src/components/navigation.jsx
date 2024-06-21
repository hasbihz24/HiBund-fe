import React from 'react';
function Navigation() {
  return (
    <nav className="navigation flex justify-center my-5">
      <ul className="flex">
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom active py-2 px-4 ">
            Brainstorming
          </a>
        </li>
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom py-2 px-4 ">
            Diagramming
          </a>
        </li>
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom py-2 px-4 ">
            Meetings & Workshops
          </a>
        </li>
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom py-2 px-4 ">
            Scrum Events
          </a>
        </li>
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom py-2 px-4 ">
            Mapping
          </a>
        </li>
        <li className="nav-item-custom">
          <a href="#" className="nav-link-custom py-2 px-4 ">
            Research & Design
          </a>
        </li>
      </ul>
    </nav>
  );
}
;
export default Navigation;
