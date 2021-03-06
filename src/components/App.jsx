import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group';

// react component imports
import PledgeList from './PledgeList.jsx';
import Creator from './Creator.jsx';
import MoneyInput from './MoneyInput.jsx';
import CreatorModal from './CreatorModal.jsx';

// .css and styled-component imports
import './pledges-styles.css';
import { CreatorWrapper } from './styled/CreatorWrapper.jsx';

import {
  FadeInDiv,
  FadeOutDiv
} from './styled/Animations.jsx';

import {
  WholePageWrapper,
  ModalWrapper,
  CreatorModalStyles
} from './styled/CreatorModalStyles.jsx';


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

  /**
   * adds the number of backers for each pledge and sets this.state.creator.totalBackers
   */
  calculateTotalBackers() {
    const { pledges, creator } = this.state;
    let totalBackers = 0;
    for (let i = 0; i < pledges.length; i++) {
      totalBackers += pledges[i].backers;
    }
    let creatorCopy = {...creator};
    creatorCopy.totalBackers = 'First created - ' + totalBackers.toString() + ' backers';
    this.setState({ creator: creatorCopy });
  };

  /**
   * makes axios request and populates this.state with response data
   */
  componentDidMount() {
    const { id, pledges, creator } = this.state;
    axios.get(`http://localhost:3003/api/pledges/${id}`)
      .then((response) => {
        let { id, listingTitle, pledges, creator, collaborators } = response.data;
        this.setState({ id, listingTitle, pledges, creator, collaborators });
        this.calculateTotalBackers();
      })
      .catch((err) => {
        console.log('error with get request: ', err);
      });
  };

  /**
   * handles clicking the "see more" text in the creator component
   */
  handleSeeMoreClick() {
    const { modalView } = this.state;
    this.toggleModalView();
  }

  /**
   * toggles this.state.modalView
   */
  toggleModalView() {
    const { modalView } = this.state;
    this.setState({ modalView: !modalView });
  }

  /**
   * checks if this.state.modalView is true.
   * if so, renders modal to page
   */
  renderModal() {
    const { modalView, creator, collaborators } = this.state;
    if (modalView) {
      return (
        <FadeInDiv>
            <WholePageWrapper onClick={() => {this.toggleModalView()}} >
            </WholePageWrapper>
            <ModalWrapper onClick={() => {this.toggleModalView()}} >
              <CreatorModal
                creator={creator}
                collaborators={collaborators} />
            </ModalWrapper>
        </FadeInDiv>
      );
    } else {
      return null;
    }
  }

  render() {
    const { id, listingTitle, pledges, creator, collaborators, modalView } = this.state;
    return (
      <div className="pledgeComponent AppComponentDiv">
        <CreatorWrapper onClick={() => {this.handleSeeMoreClick()}} >
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
        {this.renderModal()}
      </div>
    );
  }
};

export default App;



