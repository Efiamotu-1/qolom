import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
//   marginRight: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HomeCard(props) {
  

  return (
    <Card sx={{ width: 300, borderRadius : 5 }} elevation={5}>
      <CardHeader 
       
        sx={{display: 'flex', justifyContent : 'center', flexDirection : 'column'}}
        title={props.title}
      />
      <CardMedia
        component="img"
        height= '150'
        image={props.queue}
        alt="...bank queue"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
          {props.key}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton  sx={{width : '100%'}}>
          {props.button}
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
