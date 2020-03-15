/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ChannelContainer from './ChannelContainer.jsx';

class ChannelInfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: false,
    };
  }

  render() {
    return (
      <div className="flex-container">
        <ChannelContainer />
        <div>
          <button type="button">svg</button>
          <button type="button">svg</button>
        </div>
      </div>
    );
  }
}

export default ChannelInfoBar;
