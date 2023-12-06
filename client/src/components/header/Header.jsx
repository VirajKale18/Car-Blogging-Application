
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #e9edc9;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'><div className='font'>HOME</div></Link>
                <Link to='/about'><div className='font'>ABOUT</div></Link>
                <Link to='https://virajkale-portfolio.netlify.app/' target="_blank"><div className='font'>CONTACT</div></Link>
                <Link to='/login'><div className='font'>LOGOUT</div></Link>
            </Container>
        </Component>
    )
}

export default Header;