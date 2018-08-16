import React from 'react'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import { authGetToken } from '../actions/index';

class ReturnAuthorize extends React.Component {
    constructor(props){
        super(props)
        authGetToken(props)
    }

    render() {
        return (
            <div style={{textAlign : 'center',height : '50%'}}>
            <img width={400} alt="" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
             <Typography variant="headline" gutterBottom>
                Um novo modo de visualização do seu GitHub
             </Typography>

                <Typography variant="headline" gutterBottom>
                    Estamos processando, só um instante!
                </Typography>
                <CircularProgress  size={50} />
                <br/><br/>
                O <b>Github Visualizer</b> está reunindo algumas informações suas
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        router : state.router
    }
}

export default connect(mapStateToProps)(ReturnAuthorize)