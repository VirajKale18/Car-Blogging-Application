
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 95%;
    background: url(https://images.unsplash.com/photo-1624085568108-36410cfe4d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80) center/cover no-repeat #000;
    background-position-y : -365px;
    height: 50vh;
    display: flex;
    margin-top: 5rem; 
    margin-left: 2.5rem;
    flex-direction: column;
    align-items: center;
    border-radius:10px;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    margin-right :4.5rem;
    color: #6a994e;
    line-height: 1
    
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
     color: #caf0f8;
     margin-right :4.5rem;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading ><div className='font'>CarZine</div></Heading>
            <SubHeading ><div className='font'>VK Productions</div></SubHeading>
        </Image>
    )
}

export default Banner;