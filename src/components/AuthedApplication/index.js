
import React, { useReducer, createContext } from "react";
import { Router, Link } from "@reach/router";
import Navigation from "../Layout/elements/Navbar";
import styled from 'styled-components'
import Dashboard from "../Dashboard";
import Users from "../Users";
import Board from "../Board/Show";
import { Nav, NavItem, NavLink } from 'reactstrap';

const NotFound = () =>
    <div>404 - Not Found</div>


export default () => {

    return (
        <Page>
            <Navigation/>
            <MainBody>
                <>
                    <Sidebar>
                        <Nav vertical>
                            <NavItem>
                                <Link to="/">Boards</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="users">Users</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="usersddd">Usersss</Link>
                            </NavItem>
                        </Nav>
                    </Sidebar>
                    <Content>
                        <Router>
                            <NotFound default />
                            <Dashboard exact path="/" />
                            <Users exact path="users" />
                            <Board exact path="boards/:id"/>
                            
                        </Router>
                    </Content>
                </>
            </MainBody>
        </Page>
    )
};

 

const Page = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;
`

const MainBody = styled.div`
   width:100%;
   height:calc(100% - 40px);
   display:flex;
   flex-direction:row;
`

const Sidebar = styled.div`
   width:10%;
   display:flex;
   min-width:150px;
   flex-direction:column;
   background:#5db6ea;
   text-align:center;
   color:#fff;
   padding:25px;
`

const Content = styled.div`
   width:90%;
   display:flex;
   flex-direction:column;
   background:#f1f1f1;
   padding:25px;
`