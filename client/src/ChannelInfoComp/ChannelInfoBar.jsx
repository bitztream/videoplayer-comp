/* eslint-disable react/prop-types */
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
    const { video, handleClick } = this.props;
    return (
      <div className="MasterFlex" style={{ color: '#484848' }}>
        <TopFlex>
          <ChannelContainer video={video} handleClick={handleClick} />
          <RightTop><InfoButton video={video} /></RightTop>
        </TopFlex>
        <div style={{ paddingLeft: '1.25rem' }}>Enable in-game Drops with Account Link.</div>
      </div>
    );
  }
}

export default ChannelInfoBar;
