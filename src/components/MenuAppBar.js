import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import {searchUser} from "../actions"
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
      query : props.search.login
    };
  }


  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleChange = event => {
    this.setState({query: event.target.value});
  }

  handlePerfil = event => {
  
    event.preventDefault();
    this.setState({ anchorEl: null,query : this.props.user.login });
    searchUser(this.props.user.login,this.props.token,this.props.dispatch)
    this.props.dispatch({type : "SEARCH_USER" , payload : { query : this.props.user.login}})
  }

  handleSearch = event => {
    event.preventDefault();
    searchUser(this.state.query,this.props.token,this.props.dispatch)
    this.props.dispatch({type : "SEARCH_USER" , payload : { query : this.state.query}})
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.dispatch({type : "LOGOUT"})
    this.props.history.push("/authorize");
    
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="AppBar">
      <AppBar position="fixed" color="primary">
          <Toolbar variant="dense">
            <Typography variant="title" color="inherit" className={classes.flex}>
              <ViewCarousel/>  Github Visualizer
            </Typography>
            {(this.props.searchStatus === "NOT_FOUND" || this.props.searchStatus === "NO_LOCATION") &&  <ErrorIcon style={{color : "#f57171", fontSize: 34}}/>}
            {this.props.searchStatus === "LOADING" && <CircularProgress style={{ color: "#c1bfe5", marginRight:5 }} />}

          {this.props.user.login && (<div style={{ display: "contents" }}>
          
              <form onSubmit={this.handleSearch}>
                <input type = "text"
                  className="inputSearch"
                  value={this.state.query || ""} onChange={this.handleChange}
                  placeholder="Procurar usuário"
                /> 
                
            
                <Button
                  type="submit"
                  style={
                    {
                      color: "white",
                      backgroundColor : "rgba(255, 255, 255, 0.21)",
                      borderRadius: "0px 10px 10px 0px",
                      marginTop : "-2px"
                    }
                  }
                color="primary" className={classes.button}>
                < SearchIcon />
                </Button>

            </form>
          
            
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <Avatar alt="Remy Sharp" src={this.props.user.avatar_url} className={classes.avatar} />
                  
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handlePerfil}> Exibir perfil </MenuItem>
                  <MenuItem onClick={this.handleLogout}> Sair </MenuItem>
                </Menu>
              </div>)}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => state

export default connect(mapStateToProps)(withStyles(styles)(MenuAppBar));
