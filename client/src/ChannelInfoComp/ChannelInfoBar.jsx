/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import styled from 'styled-components';
import React from 'react';
import ChannelContainer from './ChannelContainer.jsx';
import InfoButton from './InforButton.jsx';


const FlexContainer = styled.div` 
  display: inline;
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
      <FlexContainer>
        <ChannelContainer />
        <InfoButton />
      </FlexContainer>



    );
  }
}

export default ChannelInfoBar;
