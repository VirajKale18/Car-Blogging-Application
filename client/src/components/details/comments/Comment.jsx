import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";


const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 450;
    color: #878787;
    font-size: 18px;
    margin-right: 10px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteComment(comment._id);
       setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name><div className="font">{comment.name}</div></Name>
                <StyledDate><div className="font">{new Date(comment.date).toDateString()}</div></StyledDate>
                {comment.name === account.username && <DeleteIcon onClick={() => removeComment()} />}
            </Container>
            <Typography><div className="font">{comment.comments}</div></Typography>
        </Component>
    )
}

export default Comment;