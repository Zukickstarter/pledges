import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pledges: []
    }
  }

  componentDidMount() {
    const { pledges } = this.state;
    console.log('component did mount');
    axios.get('http://localhost:3003/api/pledges/6')
    .then((response) => {
      this.setState({ pledges: response.data });
    })
    .catch((err) => {
      console.log('error with get request: ', err);
    });
  };

  render() {
    const { pledges } = this.state;
    return (
        <div className="AppComponentDiv">
          App component div
        </div>
    );
  }
};

export default App;