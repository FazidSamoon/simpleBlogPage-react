import React from 'react';
import styled from 'styled-components';
import {useAuth , logOut} from "../Utils/firebase"

function Header() {

    const currentUser = useAuth();

    async function logout(){
        await logOut();
        console.log(currentUser)
    }
    
  return(
        <NavBar>
            <NavTitle>Blogs.com</NavTitle>

            <navButton>
                {!currentUser &&

                    <>
                        <a href='/createAccount'><SignInButton>SignIn</SignInButton></a>
                        <a href='/login' ><LoginButton>Login</LoginButton></a>
                    </>
                }
                
                {currentUser && 
                    <LogOutButton onClick={logout}>Logout</LogOutButton>
                }
                
            </navButton>
        </NavBar>
    );
}

export default Header;

const NavBar = styled.div`
    height: 80px;
    width: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`

const NavTitle = styled.p`
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 25px;
`
const navButton = styled.div`

`

const SignInButton = styled.button`
    margin: 0px 5px;
    border: 1px solid white;
    background-color: green;
    border-radius: 10px;
    height: 25px;
    width: 80px;
    color: white;
    cursor: pointer;
    transition: all 250ms;
    font-weight: 600;
    
    

    &:hover{
        border: 1px solid green;
        background-color: white;
        color: green;
    }
`

const LoginButton = styled.button`
    margin: 0px 5px;
    height: 25px;
    width: 80px;
    border: none;
    background-color: blue;
    border-radius: 10px;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    transition: all 250ms;
    font-weight: 600;
    

    &:hover{
        border: 1px solid blue;
        background-color: white;
        color: blue;
    }
`

const LogOutButton = styled.button`
    margin: 0px 5px;
    border: 1px solid white;
    background-color: red;
    border-radius: 10px;
    height: 25px;
    width: 80px;
    color: white;
    cursor: pointer;
    transition: all 250ms;
    font-weight: 600;

    &:hover{
        border: 1px solid red;
        background-color: white;
        color: red;
    }
`
