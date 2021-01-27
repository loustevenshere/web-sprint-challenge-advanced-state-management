import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { getSmurfs, postSmurfs } from './actions'
import { connect } from "react-redux";
import  reducer  from './reducers'



class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3333/smurfs').then(res=>{
    //   console.log(res.data);
    // })
   this.props.getSmurfs()
   this.props.postSmurfs(  {
  name:'Poppa Kurf',
   position:'Village Leader',
   nickname: 'Pops',
   description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
   
   })
  //  console.log(this.state)
   
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay/>
        </main>
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurfs, reducer })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.