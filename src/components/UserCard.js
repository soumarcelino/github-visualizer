import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import LocationIcon from '@material-ui/icons/LocationOn'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
};

function SimpleMediaCard(props) {
  const { classes,data } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.avatar_url}
          title="User profile image"
        />
        <CardContent style={{textAlign:"left"}}>
          <Typography gutterBottom variant="headline" component="h2"> {data.name} </Typography>
          <Typography variant="subheading" color="textSecondary">
            {data.email}
          </Typography>
          <Typography component="p">
              {data.bio}
          </Typography>
          {data.location && <div><LocationIcon/>{data.location}</div>}
        </CardContent>
        <CardActions>

          <Badge className={classes.margin} badgeContent={data.followers} color="primary">
            <Button size="small"  color="primary">
              Seguidores
            </Button>
          </Badge>
          <Badge className={classes.margin} badgeContent={data.following} color="primary">
            <Button size="small"  color="primary">
              Seguindo
            </Button>
          </Badge>

          <Button size="small" href={data.html_url} color="default">
            Mais
          </Button> 


        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);