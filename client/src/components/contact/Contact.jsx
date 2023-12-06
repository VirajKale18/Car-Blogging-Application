
import { Box, styled, Typography, Link } from '@mui/material';
import { /*GitHub,*/ Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
width: 95%;
background: url(https://images.pexels.com/photos/5214418/pexels-photo-5214418.jpeg) center/cover no-repeat #000;
height: 50vh;
display: flex;
margin-top: 5rem; 
margin-left: 2.5rem;
flex-direction: column;
align-items: center;
border-radius:10px;
justify-content: center;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.instagram.com/viraj_kale.exe/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:virajkale1802@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;