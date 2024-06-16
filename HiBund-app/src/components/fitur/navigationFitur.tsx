import { Nav, NavItem, NavLink } from "reactstrap";

function NavigationFitur() {
  return (
    <Nav className="justify-content-center my-5 navigation">
      <NavItem className="nav-item-custom">
        <NavLink href="#" className="nav-link-custom active">
          Semua
        </NavLink>
      </NavItem>
      <NavItem className="nav-item-custom">
        <NavLink href="#" className="nav-link-custom ">
          Artikel & Panduan
        </NavLink>
      </NavItem>
      <NavItem className="nav-item-custom">
        <NavLink href="#" className="nav-link-custom ">
          Tips & Trik
        </NavLink>
      </NavItem>
      <NavItem className="nav-item-custom">
        <NavLink href="#" className="nav-link-custom ">
          Group & Komuitas
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default NavigationFitur;
