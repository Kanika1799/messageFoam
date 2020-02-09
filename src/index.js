// Imports -----------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import getWeb3 from "./utils/getWeb3";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import {Container, Row, Col, FormInput, Button ,Card,CardHeader,CardTitle,CardBody,CardFooter } from "shards-react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import './index.css';
import NavExample from './Navbar';
import CreateReview from './newreview';
import CreateToken from './newtoken';
import PlaceNear from './placesnear';
import Profile from './Profile';

import {config} from './utils.js'

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
// -------------------------------------

class Main extends React.Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  render(){
    return(
      <div>
      <NavExample />
      <HashRouter>
        <Route exact path="/places-near" component={PlaceNear}/>
        <Route path="/new-review" component={CreateReview}/>
        <Route path="/new-token" component={CreateToken}/>
        <Route path="/profile" component={Profile}/>
        

      </HashRouter>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
      </div>
    );
  }

  
}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
