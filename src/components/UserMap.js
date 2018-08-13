import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Map, TileLayer,Marker, Popup } from 'react-leaflet';

import axios from 'axios';

let position;
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes,data } = props;
  
  axios.get(`https://maps.google.com/maps/api/geocode/json?address=${data.location}`)
  .then(res => {
    position = [res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng]
    console.log(res.data.results[0].geometry.location)
  })

  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent style={{padding:0}}>
            <Map center={{lat: -3.7327144,lng : -38.5269981}} zoom={3} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={{lat: -3.7327144,lng : -38.5269981}}>
                            <Popup>
                                {data.name}
                            </Popup>
                        </Marker>
            </Map>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);