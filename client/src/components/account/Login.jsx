import React from 'react'
import {useState,useContext} from 'react';
import {Box ,TextField,Button, styled,Typography } from '@mui/material'
import {API} from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
const blog = require('../../assets/blog3.png');

const Component = styled(Box)`
width :400px;
margin :auto;
background:#F9F9FA;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 100,
    height:50,
    display: 'flex',
    margin: 'auto',
    padding: '35px 0 0'
});
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background:#fff; 
    color: rgb(16, 16, 16);;
    height: 48px;
    border-radius: 4px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: rgb(16, 16, 16);
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 13px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
const Login = ({ isUserAuthenticated }) => {
    
    //blog logo image url
    //const imageURL = logo; 
    const [account, toggleAccount] = useState('login');
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error,setError] = useState('');
    
    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup =()=>{
        account === 'signup'? toggleAccount('login') : toggleAccount('signup');
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');

             sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
             sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
             setAccount({ name: response.data.name, username: response.data.username });
            
             isUserAuthenticated(true)
            // setLogin(loginInitialValues);
             navigate('/');
        } else {
            setError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
         if (response.isSuccess) {
             setError('');
             setSignup(signupInitialValues);
             toggleAccount('login');
         } else {
             setError('Something went wrong! please try again later');
         }
    }

    return (
        <Component>
        <Box>
            <Image src={blog} alt="blog" />
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Username' />
                        <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Password' />

                        { error && <Error>{error}</Error> }

                        <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                    </Wrapper> :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                         { error && <Error>{error}</Error> }
                        <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper>
            }
        </Box>
    </Component>

  )
}

export default Login
