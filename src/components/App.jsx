import React from 'react';
import axios from 'axios';
import PledgeList from './PledgeList.jsx';
import Title from './styled/Title.jsx';
import CreatorWrapper from './styled/Creator.jsx';
import styled from 'styled-components';
import './pledges-styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      listingTitle: '',
      pledges: [],
      creator: {
        imageURL: ''
      },
      collaborators: []
    }
  };

  componentDidMount() {
    const { id, pledges } = this.state;
    console.log('component did mount');
    axios.get(`http://localhost:3003/api/pledges/${id}`)
      .then((response) => {
        console.log('response.data: ', response.data);
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
        <div className="pledgeComponent AppComponentDiv">
          <Title>
            {listingTitle}
          </Title>
          <CreatorWrapper>
            <div className="creatorImageURLDiv">
              <img className="creatorImage" src={creator.imageURL} />
            </div>
            <div className="creatorNameDiv">
              {creator.name}
            </div>
            <div className="creatorDescription">
              {creator.description}
            </div>
            <div className="seeMoreLinkDiv">
              See More
            </div>
          </CreatorWrapper>
          <div>
            <br></br>
          </div>
          <div className="supportWordDiv">
            SUPPORT
          </div>
          <div className="pledgesDiv">
            <div className="noRewardPledgeDiv">
              Pledge without a reward
            </div>
            <div className="noRewardInputDiv">
              <input type="text"></input>
            </div>
            <div className="noRewardDescriptionDiv">
              Back it because you believe in it. Support the project for no reward, just because it speaks to you.
            </div>
            <PledgeList
              pledges={pledges} />
          </div>
        </div>
    );
  }
};

export default App;