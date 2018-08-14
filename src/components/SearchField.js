import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table'
import { connect } from 'react-redux';
import Search from '@material-ui/icons/Search';
import { Button, TextField } from '@material-ui/core';
class SearchField extends Component {

  constructor(props){
    super(props);
    this.state = {txt: '',
                  data : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleChange(event) {
    this.setState({txt: event.target.value});
  }

  handleSearch(event){
    console.log(`Procurando por`)
    console.log(this.state.txt)
    event.preventDefault();
    
    let client_id = "";
    let client_secret = "";

    axios.get(`https://api.github.com/users/${this.state.txt}?client_id=${client_id}&client_secret=${client_secret}`)
      .then(res => {
        this.setState({'data' : <Table data={res.data}/>})
    })
  }

  render() {
    return (
      <div className="App">
              {this.props.count}
              <form onSubmit={this.handleSearch}>
               <TextField id="SearchField" value={this.state.txt} onChange={this.handleChange} label="Procure por um usuário" style={{width:"30%"}} />
              <Button onClick={this.handleSearch} variant="contained" color="primary" style={{marginLeft : 10}}> <Search/> </Button>
              </form>
              <br/>
              {this.state.data}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count : state.count
})

export default connect(mapStateToProps)(SearchField);
