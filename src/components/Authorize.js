import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Authorize extends React.Component {
    render() {
        return (
            <div style={{textAlign : 'center',height : '50%'}}>
            <img width={400} src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
             <Typography variant="headline" gutterBottom>
             Um novo modo de visualização do seu GitHub
            </Typography>
                
                <Button variant="contained" href="https://github.com/login/oauth/authorize?client_id=98658616ec76ab2c1974&redirect_uri=http://localhost:3000/return-authorize&state=123" color="primary" >
                    Autorizar
                </Button>
                
                <br/><br/>
                Autorize o <b>Github Visualizer</b> coletar algumas informações suas
            </div>

        )
    }
}