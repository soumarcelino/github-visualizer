import React, { Component } from 'react';
import UserCard from './UserCard'
import UserMap from './UserMap'
import Grid from '@material-ui/core/Grid';
export default class Table extends Component {
    render () {
        return (
                  <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <UserCard data={this.props.data}/>
                    </Grid>
                    <Grid item xs={9}>
                        <UserMap data={this.props.data}/>
                    </Grid>
                  </Grid>
            
        )
    }   

}