import {} from '@firebase/util';
import {  useAuth } from "../Utils/firebase"
import React, { useState } from 'react';
import styled from 'styled-components';
import {handleNew} from "../Utils/cruds"

function Addpost() {

    const [title , setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const currentUser = useAuth();

    

    async function submitPost(){
            const author = currentUser.displayName;
            const id = currentUser.uid;
        await handleNew(
            title,
            postText,
            author,
            id
            
        )
    }

  return (
    <Container>
        <Form>
            <label> Title:</label> <br />
            <input 
                placeholder='title'
                onChange={(event) => {setTitle(event.target.value)}}
            /><br></br>
            <label> Content:</label> <br />
            <textarea 
                rows={15} 
                cols={20}
                onChange={(event) => {setPostText(event.target.value)}}
            /><br />
            <button onClick={submitPost}>Submit</button>
        </Form>
    </Container>
  );
}

export default Addpost;

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

const Form = styled.div`

    input{
        width: 300px;
    }

    textarea{
        width: 300px;
    }
    label{
        color: white;
    }

    button{
        width: 300px;
        height: 40px;
        border: none;
        background-color: blue;
        
        color: white;
        border: 1px solid white;
        cursor: pointer;
        margin-top: 20px;
    }
`