/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import styled from 'styled-components';
import React from 'react';
import ChannelContainer from './ChannelContainer.jsx';
import InfoButton from './InforButton.jsx';

const TopFlex = styled.div`
  display:grid;
  align-items:baseline;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-rows: minmax(5px, auto);
`;

const RightTop = styled.div`
  grid-column: 13;
  gird-row:1;
  justify-items: start;
`;

class ChannelInfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: false,
    };
  }


  render() {
    return (
      <div className="MasterFlex">
        <TopFlex>
          <ChannelContainer />
          <RightTop><InfoButton /></RightTop>
        </TopFlex>
        <div style={{ paddingLeft: '20px' }}>Enable in-game Drops with Account Link.</div>
      </div>
    );
  }
}

export default ChannelInfoBar;
