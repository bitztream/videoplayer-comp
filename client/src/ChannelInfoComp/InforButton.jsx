/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import styled from 'styled-components';
import React from 'react';

const SvgButton = styled.button`
  background-color: Transparent;
  border:none;
  cursor:pointer;
`;


const Span = styled.span`
  display: none;
  width: 50px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: -21%;
  font-size: 12px;
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 4px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`;

const InforButtons = styled.div`
  display:flex;
  margin-top:-50px;
  @media only screen and (max-width: 600px) {
    display:none;
  }
`;

const FlexShare = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${Span}{
    display: block;
  }
`;

class InforButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`An essay was submitted: ${value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InforButtons>
          <FlexShare>
            <SvgButton type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
            </SvgButton>
            <Span>Share</Span>
          </FlexShare>
          <SvgButton type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /></svg>
          </SvgButton>
        </InforButtons>
      </form>
    );
  }
}

export default InforButton;
