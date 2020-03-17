/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import styled from 'styled-components';
import React from 'react';

const SvgButton = styled.button`
  background-color: Transparent;
  border:none;
  cursor:pointer;

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
    // const { video } = this.props;
    // console.log('InforButton', video);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <SvgButton type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
          </SvgButton>
          <SvgButton type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /></svg>
          </SvgButton>
        </div>
      </form>
    );
  }
}

export default InforButton;
