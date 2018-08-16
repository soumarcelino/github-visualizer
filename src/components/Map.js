import React from "react"
import { connect } from 'react-redux'
import LocationIcon from '@material-ui/icons/LocationOn'
import { Map, TileLayer,Marker, Popup } from 'react-leaflet';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';  

class UserMap extends React.Component {
    render(){
        let location = [this.props.searchLocation.lat,this.props.searchLocation.lng];
        return (
            <div>
            {this.props.search.location &&
                
                <Card style={{minWidth: 275}}>
                    <CardContent style={{padding:0}}>
                
                <Map center={location} zoom={3} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={location}>
                        <Popup>
                            <LocationIcon/> {this.props.search.location}
                        </Popup>
                    </Marker>
                   
            </Map>
            </CardContent>
      </Card>
            }
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(UserMap)