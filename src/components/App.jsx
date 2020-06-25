import React from 'react';
import axios from 'axios';
import PledgeList from './PledgeList.jsx';
import Title from './styled/Title.jsx';
import CreatorWrapper from './styled/CreatorWrapper.jsx';
import styled from 'styled-components';
import Creator from './Creator.jsx';
import MoneyInput from './MoneyInput.jsx';
import './pledges-styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      listingTitle: '',
      pledges: [],
      creator: {
        totalBackers: 'First created - ',
        id: '',
        imageURL: '',
        description: '',
        name: '',
        location: '',
        website: ''
      },
      collaborators: [],
      modalView: false
    }
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
  };

  handleSeeMoreClick() {
    console.log('SEND IT TO THE MODAL');
  }

  calculateTotalBackers() {
    const { pledges, creator } = this.state;
    let totalBackers = 0;
    for (let i = 0; i < pledges.length; i++) {
      totalBackers += pledges[i].backers;
    }
    let creatorCopy = {...creator};
    creatorCopy.totalBackers = 'First created - ' + totalBackers.toString() + ' backers';
    this.setState({ creator: creatorCopy });
  }

  componentDidMount() {
    const { id, pledges, creator } = this.state;
    console.log('component did mount');
    axios.get(`http://localhost:3003/api/pledges/${id}`)
      .then((response) => {
        console.log('response.data: ', response.data);
        let { id, listingTitle, pledges, creator, collaborators } = response.data;
        this.setState({ id, listingTitle, pledges, creator, collaborators });
        this.calculateTotalBackers();
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
        <CreatorWrapper>
          <Creator
            creator={creator}
            handleSeeMoreClick={this.handleSeeMoreClick} />
        </CreatorWrapper>
        <div className="supportWordDiv">
          SUPPORT
        </div>
        <div className="pledgesDiv">
          <div className="noRewardPledgeDiv">
            <div className="noRewardTitleDiv">
              Pledge without a reward
            </div>
            <MoneyInput />
            <div className="noRewardDescriptionDiv">
              <div className="boldText">
                Back it because you believe in it.
              </div>
              <div>
                Support the project for no reward, just because it speaks to you.
              </div>
            </div>
          </div>
          <PledgeList
            pledges={pledges} />
        </div>
      </div>
    );
  }
};

export default App;