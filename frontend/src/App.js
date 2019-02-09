import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bar from './components/Bar'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};



function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="/static/images/hooing.png"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          쾌변후잉 (Quabyeon Hooing)
          </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
      <CardActionArea>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          아주좋음 4.9/5
        </Button>
        <Button size="small" color="primary">
          공유
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
let StyledCard = withStyles(styles)(MediaCard)


function Main() {
  return (
    <div>
        <Bar/>
        <StyledCard/>
    </div>
  )
}
//export default Bar
export default Main
//export default withStyles(styles)(MediaCard);