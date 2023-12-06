import * as React from 'react';
import PropTypes from 'prop-types';
import { styled,Typography,Card } from '@mui/material';
import Grid from '@mui/material/Grid';
//import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Container = styled(Card)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 300px;
    /* & > img,*/ & > p {
        padding: 0 5px 5px 5px;
    }
`;


function Post1({ post }) {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }
    
  return (
    <Grid>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',margin:'5px',height: '300px' }}>
          <CardContent sx={{ width:'10px', flex: 1 }}>
            <Typography component="h2" variant="h5">
              {addEllipsis(post.title,40)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.username}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {addEllipsis(post.description, 30)}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.picture}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Post1;