import { useState , useContext,useEffect } from 'react';
import React from 'react'
import { DataContext } from '../../../context/DataProvider';
import { Box /*TextareaAutosize*/ ,styled,/*Button*/ } from '@mui/material'
import { API } from '../../../service/api';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import Comment from './Comment';

const Container = styled(Box)`
    margin-top: 25px;
    display: flex;
`;
const CommentBox = styled(Box)`
    margin-top : 125px;
`; 

const StyledTextArea = styled("textarea")(({ theme }) => ({
    border: `2px solid #F9FAFB`,
    width: "100%",
    flexGrow: 1,
    boxSizing: "border-box",
    borderRadius: 3,
    backgroundColor: "#f8f8f8",
    // font-size: 16px;
    resize: "none",
    "&:hover": {
        border: `2px solid #F4F6F8`
    },
    "&:focus": {
      border: `2px solid #454F5B`
    }
  }));

  const initialValues = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}


const Comments = ({ post }) => {
 //   const url = 'https://static.thenounproject.com/png/12017-200.png' 
    const [comment,setComment] = useState(initialValues);
    const [comments,setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
    const { account } = useContext(DataContext);

    useEffect(()=>{
        const getData = async()=>{
           let response = await API.getAllComments(post._id);
           if(response.isSuccess){
                setComments(response.data);
           }
        }
        if(post._id){
        getData();
    }
    },[post,toggle])

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }
        const addComment = async(e)=>{
            let response = await API.newComment(comment);
            if(response.isSuccess){
                setComment(initialValues);
                setToggle(prev => !prev)
            }
        }  

        
  return (
    <Box>
        <CommentBox>
         {
            comments && comments.length > 0 && comments.map(comment =>(
                <Comment comment={comment} setToggle={setToggle} />
                ))
         }    
        </CommentBox>

        <Container>
            <PersonIcon />
            <StyledTextArea 
                    rowsMin={5} 
                    placeholder="Comment on this blog !" 
                     value={comment.comments}
                     onChange={(e) => handleChange(e)}
                />
                <SendIcon  
                    size="medium" 
                    style={{ height: 40 }}
                    onClick={(e) => addComment(e)}
                />                  
        </Container>

    </Box>
  )
}

export default Comments;
