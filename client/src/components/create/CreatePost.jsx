import React from 'react'
import { useState, useEffect, useContext  } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Box, styled, FormControl, InputBase, Button,TextareaAutosize } from '@mui/material'
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
//import {AddLinkIcon  from '@mui/icons-material';
//import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;
const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;  
const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;
const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '70vh',
    objectFit: 'cover',
    marginTop: '2rem',
    borderRadius:'10px'
})

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}
const CreatePost = () => {
    const [post, setPost] = useState(initialPost);
    const [file,setFile] = useState('');
    const {account} = useContext(DataContext); 
    const location = useLocation();
    const navigate = useNavigate();
    
    const url = post.picture ? post.picture :'https://images.unsplash.com/photo-1624085568108-36410cfe4d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    
useEffect(() => {
    const getImage = async () => { 
        if(file) {
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);
                
            try{
             const response = await API.uploadFile(data);
             post.picture = response.data;
            }catch(error){
                console.error("Error uploading image",error);
            }
             

        }
    }
     getImage();
     post.categories = location.search?.split('=')[1] || 'All';
     post.username = account.username;
}, [file])

    
const savePost = async () => {
    let response = await API.createPost(post);
    if(response.isSuccess){
    navigate('/');
}
}

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]:e.target.value });
    }
    
    
    return (
    <Container>
        <Image src={url} alt="banner" />
        <StyledFormControl>
            <label htmlFor="fileInput">
                <AddLinkIcon fontSize='large' color='grey'/>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
            <InputTextField placeholder='Title' onChange={(e)=>handleChange(e)} name='title'/>
            <Button variant='outlined' onClick={()=>savePost()}>Post</Button>
        </StyledFormControl>
        <Textarea
                rowsMin={5}
                placeholder="Narrate your story here !"
                name='description'
                 onChange={(e) => handleChange(e)} 
            />
    </Container>
  )
}

export default CreatePost
