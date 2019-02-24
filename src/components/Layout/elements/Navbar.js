import React, {useContext, useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import ApplicationContext from '../../../context/ApplicationContext'
  import useLocalStorage from '../../../hooks/useLocalStorage';

const Navigation = () =>{

    const {dispatch} = useContext(ApplicationContext);

    const toggle = (isOpen) =>{
      setIsOpen(!isOpen);
    }

    const [isOpen, setIsOpen] = useState(false)
    const [token,setToken,removeToken] = useLocalStorage('TOKEN', undefined);

    const onHandleLogout = () =>{
      removeToken("TOKEN");
      dispatch({type:'logout'})
    }
  
    return (
     
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Scope</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem  onClick={onHandleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  
}

export default Navigation;