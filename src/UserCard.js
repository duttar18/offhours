import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, IconButton, CardMedia } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const UserCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subheader, description, imgSrc } = props;
    return (
        <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar src="avatarSrc" />
        }
        action={
          <IconButton aria-label="settings">
            <MailIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia style={{height: "400px" }} image={imgSrc}/>
      <CardContent>
        <Typography variant="body2" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Website</Button>
      </CardActions>
    </Card>
    );
}

export default UserCard;