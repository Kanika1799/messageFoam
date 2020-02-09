import React from "react";
import { Collapse,Container,Row, FormInput, Button,Col, Card,CardHeader,CardTitle,CardBody,FormTextarea,FormSelect,Badge } from "shards-react";
import { FaComment, FaEnvelope, FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import Img from 'react-image'

export default class HODdash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestArtifact: 'Application 1',
      new : Math.random(),
    };
  }
  getNewArtifact(hash){
    const latestArtifact = this.state.latestArtifact;
    const latestArtifactNew = hash;
    console.log('Changes  new artifact ');
    console.log(hash);
    this.setState({latestArtifact:latestArtifactNew, new:Math.random()});
  }

  render(){
    return(
      <div>
        <Container className="main-container">
        <Row>
        <Col sm="12" md="12">
        <CreatedArtifacts key={this.state.new} latestOne={this.state.latestArtifact} ></CreatedArtifacts>
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

class NewArtifact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reciever: '',
      coordinates: '',
      name: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addArtifact = this.addArtifact.bind(this);
  }

  addArtifact(){
    return '';
  }

  handleInput(event) {
    const target = event.target;
    if (target.name == "reciever"){
      this.setState(Object.assign({}, this.state, {reciever: target.value}));
    }
    else if (target.name == "coordinates") {
      this.setState(Object.assign({}, this.state, {coordinates: target.value}));
    }
    else {
      this.setState(Object.assign({}, this.state, {name: target.value}));
    }
  }

}


class CreatedArtifacts extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, 'num':2, history: [] };
    var tx = this.props.latestOne;
    console.log('Tx is');
    console.log(tx);
    const history = this.state.history;
    console.log('History Before Adding');
    console.log(history);
    if(tx){
      history.push(tx);
    }
    console.log('New History');
    console.log(history);
    var newState = Object.assign({}, this.state , {history: history});
    this.state = newState;
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render(){
    const listItems = this.state.history.map((item) =>
      <li key={item.txId} className="list-items-artifacts">
      <br/ >
      <Card>
      <CardBody>
       <h3>Topic of the discussion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
      </CardBody>
    </Card>
    <br />
    <Card>
      <CardBody>
       <h3>Topic of the discussion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
      </CardBody>
    </Card>
      </li>
    )
    return(
        <div>
         <br />
        {listItems}
      </div>
    );
  }
}
