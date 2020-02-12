import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";
import { Collapse,Container,Row, FormInput, Button,Col, Card,CardHeader,CardTitle,CardBody,FormTextarea,Badge } from "shards-react";
import Travel from "./contracts/Travel.json";
import getContractInstance from './utils.js';
import Img from 'react-image';
import { FaComment, FaEnvelope, FaThumbsUp, FaThumbsDown} from 'react-icons/fa';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
var ipfsClient = require('ipfs-http-client')
const Box = require('3box')
type State = {
  hasLocation: boolean,
  latlng: {
    lat: number,
    lng: number,
  },
}

export default class CreateReview extends React.Component<{}, State> {

  captureFile (event) {
    event.stopPropagation()
    event.preventDefault()
    this.setState({added_file_hash: event.target.files});
  }

  runExample = async () => {
    const thread = await this.state.space.joinThread(this.state.subject.split(' ').join('_'))
    await thread.post(this.state.details)

  };

  componentDidMount = async () => {
      
    const obj = await getContractInstance();
    this.setState({ web3:obj.web3, accounts:obj.accounts, contract: obj.contract});
    const box = await Box.openBox(this.state.accounts[0], window.ethereum)
    const space = await box.openSpace('foammessage')
    this.setState({space:space})
  };
  mapRef = React.createRef();
  constructor(props){
    super(props);
    this.state = {
      subject: '',
      details: '',
      web3: null,
      accounts: null,
      contract: null,
      hasLocation: false,
      latlng: {
      lat: 51.505,
      lng: -0.09,
    },
      added_file_hash: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.runExample = this.runExample.bind(this);
    this.captureFile = this.captureFile.bind(this);
  }

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e: Object) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  handleInput(event) {
    const target = event.target;
    if (target.name == "subject"){
      this.setState(Object.assign({}, this.state, {subject: target.value}));
    }
    else if (target.name == "details") {
      this.setState(Object.assign({}, this.state, {details: target.value}));
    }
    else {
      this.setState(Object.assign({}, this.state, {name: target.value}));
    }
  }
  render(){
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null
    return(
      <div>
        <Container className="main-container">
          <Row>
            <Col sm="12" md="12">
            <Card>
      <CardBody>
       <h3>Topic of the discussion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatThe purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
        <Container>
          <Row>
            <Col>
        <FaComment/> 
        <span style={{paddingLeft:'10px'}}>
        <FaEnvelope/>
        </span>
        <span style={{paddingLeft:'10px'}}>
        <FaThumbsUp />
        </span>
        <span style={{paddingLeft:'10px'}}>
        <FaThumbsDown/>
        </span>
        </Col>
        <Col>
        <Img style={{height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0VeB5ZFBBj_tCts7BLnSYDE2mF_nDMy71Jp-aS_bV_DcAtOeF" />
        <Img style={{height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsbLC1D8hEMViiXH7UOwIpUhLmRLcMANHEgt-_Q32lbnoxYXUy" />
        <Img style={{height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbXv6psS1S_AQBiyI0hwx4cFNnPb9T07HZu3xKVsf2ra-2t7or" />
        <Img style={{height:'50px',borderRadius:'50%'}} src="https://logodix.com/logo/822200.png" />
        <Img style={{height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf4iwk3lyyUH-5GZXSCCKA5wFMFvO7HNmmtt8seQHzZgTNnrWa" />

        </Col>
        </Row>
        </Container>
        <div>

                    
                    
<br />
<Row> 

                    <FormTextarea name="details" value={this.state.details} onChange={this.handleInput} placeholder="Comment" />
                    
                   
                    
                    </Row> 
                    <br />
                    <br />
                    <center>
                    <Link to = {{
                  pathname: '/places-near',
                  
                }} ><Button theme="success" onClick={this.runExample}>Comment</Button></Link></center>
                
              </div>
      </CardBody>
    </Card>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
