import React, { useState } from 'react';
import { useRef } from 'react';
import { createUserWithGivenEmailPassword} from "../Utils/firebase"
import styled from 'styled-components';


function CreateAccount() {

    const [loading , setLoading] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();


    async function handleCreateAccount(){
        setLoading(true)
        try{
            await createUserWithGivenEmailPassword(emailRef.current.value, passwordRef.current.value)
        }catch{
            alert("error in creating user")
        } 
        setLoading(false)
    }

  return (
    <Container>
        <LoginForm>
            <h1>Create account</h1>
            <LoginWithGmail>
                <img src='https://brandlogos.net/wp-content/uploads/2020/10/gmail-logo.png'/>
                <h4>SignIn with Gmail</h4>
            </LoginWithGmail>

            <LoginFormManual>
                <input 
                    type="email"
                    placeholder="email" 
                    ref={emailRef}
                /><br></br>
                <input 
                    type="password" 
                    placeholder="password" 
                    ref={passwordRef}
                />

                <button onClick={handleCreateAccount}>Create Account</button>

                <a href='/login'>Already have an account?</a>
            </LoginFormManual>
        </LoginForm>
        
    </Container>
);
}

export default CreateAccount;


const Container = styled.main`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    padding: 0 calc(3.5vh + 5px);
    position:relative;
    align-items:center;
    justify-content: center;

    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0 ;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    
`

const LoginForm = styled.div`
    background: white;
    width: 30vw;
    height: 60vh;
    display : flex;
    flex-direction: column;
    
    align-items: center;
`

const LoginWithGmail = styled.div`
    display : flex;
    flex-direction: row;
    
    background: grey;
    width: 70%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    
    img{
        width:30px;
        height: 30px;
        align-items: flex-start;
        
    }
`

const LoginFormManual = styled.div`
    width: 70%;
    input{
        width: 95%;
        margin-top: 15px;
        border-radius: 20px;
        border: none;
        border: 1px solid black;
    }

    button{
        width: 95%;
        height: 40px;
        border: none;
        background-color: blue;
        border-radius: 10px;
        color: white;
        border: 1px solid white;
        cursor: pointer;
        margin-top: 20px;

    }
`