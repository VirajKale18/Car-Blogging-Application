
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../../constants/data';

const StyledTable = styled(Table)`
    
    border: solid rgba(224, 224, 224, 1);
    margin-left: 0.2rem;
    background: #cee0af;
    
`;
    
const StyledButton = styled(Button)`
    margin: 10px;
    margin-left: 4.5rem;
    width: auto;
    background: #a7c957;
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
             <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                {/* <Link to='/create' style={{ textDecoration: 'none' }}>              */}
                <StyledButton variant="contained"><div className='font'>Create Blog</div></StyledButton>
                </Link>
            {/* </Link>  */}

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                               <div className='font'> All Categories </div>
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        <div className='font'>{category.type}</div>
                                      </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable> 
        </>
    )
}

export default Categories;