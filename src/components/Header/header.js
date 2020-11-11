import React from "react"; 
import styled from 'styled-components'
//import { Link } from "react-router-dom"; 

const Nav = styled.div`
    background-color: grey;
`;

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 1px ;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;     
`;

const NavLeft = styled.div`
    width: 33%;
    text-align: left; 
`;

const NavCenter = styled.div`
    width: 33%;
    text-align: center; 
`;

const NavRight = styled.div`
    width: 33%;
    text-align: right;
`;

const MenuLink = styled.a`;
   padding: 10px;
   font-size: 1.1em;
`;

const Title = styled.h1`
    font-size : 1.2em;
    text-align: center;
`;

function Header(){  
	return (
        <Nav>
            <NavHeader>
                <NavLeft>
                    <Title>Túlkaþjónusta</Title>
                </NavLeft>
                <NavCenter>

                </NavCenter>
                <NavRight>
                    <MenuLink href="#">
                        Tulkur
                    </MenuLink>
                    <MenuLink href="#">
                       Dagbók
                    </MenuLink>
                  
                </NavRight>
            </NavHeader>
        </Nav>
      );
}

export default Header;
