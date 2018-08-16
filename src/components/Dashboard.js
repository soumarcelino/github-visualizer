import React from "react"
import { connect } from 'react-redux'
import UserCard from './UserCard'
import Map from './Map'
class Dashboard extends React.Component {
    constructor(props){
        super(props)
        if(props.token === "") props.history.push("/authorize");
    }
    render(){
        return (
           <div style={{width : "100%",heigth: 500, margin : "auto"}}>
                <div style={{ width:360, float : "left" }}>{this.props.search.login && <UserCard data={this.props.search}/>}</div>
                <div style={{ height : 200 }}>{this.props.searchLocation.lat && <Map/>}</div>
          </div>
        
        )
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Dashboard)