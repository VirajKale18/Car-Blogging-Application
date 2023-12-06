import { useEffect, useState,useContext, } from "react";
import { Box, Typography, styled } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { API } from "../../service/api"
import { DataContext } from "../../context/DataProvider";
import { useParams ,Link, useNavigate } from "react-router-dom";
import Comments from "./comments/Comments";
import React from 'react'
import '../../style.css';

//Whole container css
const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

//image css 
const Image = styled('img')({
    width: '100%',
    height: '70vh',
    objectFit: 'cover',
    marginTop: '2rem',
    borderRadius:'10px'
    
});

const Heading = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    word-break:break-word
    margin: 30px 0 10px 0;
`;

const EditIcon = styled(EditNoteIcon)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 7px;
`;
const DeleteIcon = styled(DeleteForeverIcon)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 7px;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Description = styled(Typography)`
    word-break : break-word
`

const DetailView = () => {
    const [post,setPost] = useState({});
    const {id} = useParams();
    const {account} = useContext(DataContext);
    const navigate = useNavigate();

    const url = post.picture ? post.picture : 'https://media.wired.com/photos/592722c1af95806129f51b71/master/pass/MIT-Web-Loading.jpg';

    useEffect(()=>{
        const fetchData = async ()=>{
            let response = await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    },[])

    const deleteBlog = async () => {  
        await API.deletePost(post._id);
        navigate('/');
    }
    return (
            <Container>
                <Image src={url} alt="blog image"/>
                <Box>
                    {
                        account.username === post.username &&
                        <>
                        <Link to={`/update/${post._id}`}><EditIcon style={{ float: 'right' }} color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error"/>
                        </>
                    }
                </Box>
                <Heading><div className="font">{post.title}</div></Heading>
                
                <Author>
                <Typography><div className="font">Author: <Box component ="span"style={{fontWeight:600}}>{post.username}</Box></div></Typography>
                <Typography style={{marginLeft: 'auto'}}><div className="font">{new Date(post.createdDate).toDateString()}</div></Typography>
                </Author>

                <Description><div style={{whiteSpace:'pre-line',lineHeight:'1.2'}} className='font'>{post.description}</div></Description>
                <Comments post={post} />
            </Container>    
        
        )
 
}

export default DetailView;
