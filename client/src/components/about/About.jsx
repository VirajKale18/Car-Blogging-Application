
import { Box, styled, Typography } from '@mui/material';
//import { GitHub, Instagram, Email } from '@mui/icons-material';
import '../../style.css';
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
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper >
                <Typography variant="h3" className='font' style={{textAlign :'center',fontSize:'40px'}}><div className='font'>CarZine </div> </Typography> 
                <Text variant="h5" className='font'><div className='font'> <Typography></Typography><b> Our Mission :- </b><br/> 
                At CarZine, our mission is to fuel the passion for automobiles by creating a dynamic <br/> and engaging platform for car enthusiasts worldwide. We are more than just a car blogging<br/> website we are a vibrant community dedicated to celebrating the love of cars in all its forms
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                    </div>
                </Text>
                <Text variant="h5" ><div className='font'><Typography style={{textAlign :'center',fontSize:'25px'}}><div className='font'><b> Our Values</b></div></Typography>

<b>Passion for Cars:</b> <br />
We are driven by a profound passion for cars. CarZine is a space where enthusiasts can <br /> immerse themselves in the world of automobiles, sharing the thrill of the open road and the <br /> joy of automotive craftsmansh
</div>
                </Text>
                <Text variant="h5" > <div className='font'><b>Community Connection:</b> <br />

CarZine is more than a platform; it's a community of like-minded individuals who share a <br /> common love for cars. We foster connections, sparking conversations, and building relations <br /> among car aficionados globally.
</div>
                </Text>
                <Text variant="h5" >
                    <div className='font'>
                <b> Unbiased Information:</b> <br />

            We are committed to providing accurate, unbiased, and up-to-date information. CarZine is <br /> your trusted source for insightful reviews, industry trends, and the latest updates.
            </div>
                </Text>

                <Text variant="h5" >
                    <div className='font'>
              <b>  Inspiration for Every Journey:</b> <br />

We believe in inspiring every journey, whether it's a road trip, a DIY project, or the exploration <br />of cutting-edge automotive technologies. CarZine is your companion on the road, providing <br />inspiration for every step of your automotive adventure.
</div>
                </Text>
                <Text variant="h5" >
                    <div className='font'>
               <b> Future-Forward Vision:</b> <br />

Looking ahead, CarZine is dedicated to evolving with the automotive landscape. We aim to<br /> introduce innovative features and collaborations that enhance the user experience and keep<br /> our community at the forefront of the automotive conversation.
</div>
                </Text>

                <Text variant="h5" >
                <div className='font'>
               <b> Join Us on the Road:</b> <br/>

CarZine invites you to join us on this exciting journey. Whether you're seeking inspiration, <br/> connecting with fellow enthusiasts, or staying informed about the latest automotive trends,<br/> CarZine is your destination for everything cars. Let's drive together towards a future fueled by<br/> passion, knowledge, and the shared love of automobiles. Welcome to CarZine – Where Every <br/>     Drive is an Adventure!
</div>
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;