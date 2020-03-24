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
  align-items: start;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: minmax(3px, auto);
`;

const RightTop = styled.div`
  grid-column: 16;
  gird-row:1;
  align-self: center;
  @media only screen and (max-width: 600px) {
    display:none;
  }
`;

const Button = styled.button`
  color: #772ce8;
  border: 0;
  text-decoration: underline;
  font: inhert;
  font-size: 14px;
  margin:0;
  outline: none;
  padding-left:3px;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  &:hover {
    cursor:pointer;
  }
`;

const Atag = styled.a`
  color: #772ce8;
  border: 0;
  font: inhert;
  font-size:14px;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: none;
  padding: 1px 7px 2px 3px;
`;

class ChannelInfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: false,
      loginform: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { loginform } = this.state;
    this.setState({ loginform: !loginform });
  }

  render() {
    const { video, handleClick } = this.props;
    const { loginform } = this.state;
    const loginComp = loginform ? <Atag href="localhost:3000">Account link</Atag> : <Button type="button" onClick={this.handleSubmit}>Twitch Account</Button>;
    return (
      <div id="a" className="MasterFlex" style={{ color: '#484848' }}>
        <TopFlex>
          <ChannelContainer video={video} handleClick={handleClick} />
          <RightTop><InfoButton video={video} /></RightTop>
        </TopFlex>
        <div style={{ paddingLeft: '1.25rem', display: 'flex' }}>
          Enable in-game Drops with
          {loginComp}
        </div>
      </div>
    );
  }
}

export default ChannelInfoBar;
