import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import db from "../Utils/firebase"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function MainPage() {

    const [blogs , setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        const collectionRef = collection(db , "blogs");
        const q = query(collectionRef , orderBy("timeStamp" , "desc"));
        const unsub = onSnapshot(q , (snapshot) => {
            setBlogs(snapshot.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        }) 
    },[])
  return( 
  <Container>
      {blogs.map((data) =>(
          <BlogContainer key={data.id}>
          <h1>{data.title}</h1>
          <BlogDetails>
              <AuthorDetails>
                  <Author />
                  <p>{data.author}</p>
              </AuthorDetails>
              
              <AuthorDetails>
                  <Date />
                  <p>ss</p>
              </AuthorDetails>
          </BlogDetails>
          
          <BLogContent>
            {data.content}
          </BLogContent>
    </BlogContainer>
      ))}
      
  </Container>
  );
}

export default MainPage;


const Container = styled.main`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    padding: 0 calc(3.5vh + 5px);
    position:relative;
    align-items:center;

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

const BlogContainer = styled.div`
    width: 60%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    margin-top: 30px;
    box-shadow: rgb(245 245 245 / 69%) 10px 26px 30px -10px, rgb(245 245 245 / 73%) 10px 16px 10px -10px;
    color: white;
    
`

const Author = styled(PersonIcon)`

`

const BlogDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2px 20px;
    width: 600px;
  height: auto;
  max-height: 600px;
`

const AuthorDetails = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`
const Date = styled(AccessTimeIcon)`

`

const BLogContent = styled.div`
    word-wrap: break-word;
    
    height: auto;
    max-height: 400px;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    
`
