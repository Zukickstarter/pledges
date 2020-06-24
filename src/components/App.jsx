import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PledgeList from './PledgeList.jsx';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      listingTitle: '',
      pledges: [],
      creator: '',
      collaborators: []
    }
  }

  componentDidMount() {
    const { pledges } = this.state;
    console.log('component did mount');
    axios.get('http://localhost:3003/api/pledges/6')
      .then((response) => {
        console.log('response: ', response);
        let { id, listingTitle, pledges, creator, collaborators } = response.data;
        this.setState({ id, listingTitle, pledges, creator, collaborators });
      })
      .catch((err) => {
        console.log('error with get request: ', err);
      });
  };

  render() {
    const { id, listingTitle, pledges, creator, collaborators } = this.state;
    console.log('this.state: ', this.state);
    return (
        <div className="AppComponentDiv">
          <Title>
            THIS IS THE TITLE
          </Title>
          <PledgeList
            pledges={pledges} />
        </div>
    );
  }
};

export default App;