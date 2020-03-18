/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../Videoplayer.jsx';

const Maindiv = styled.div`
  z-index:1;
  position:fixed;
  left: 25%;
  top: 25%;
  width:50%;
  height:60%;
  background-color: gray;
`;

const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Background = styled.div`
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.20);
`;

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.popupRef = React.createRef();
    this.backgroundRef = React.createRef();
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.callback);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.callback);
  }

  callback(e) {
    const { handleClick } = this.props;
    if (this.backgroundRef.current === e.target) {
      handleClick(e);
    }
  }

  render() {
    const { video } = this.props;

    return (
      <Background ref={this.backgroundRef}>
        <Maindiv ref={this.popupRef}>
          <Close className="close">&times;</Close>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <VideoPlayer video={video} />
              <div className="text">Caption Text</div>
            </div>
          </div>
          <div style={{ textalign: 'center' }}>
            <span className="dot">1</span>
            <span className="dot">2</span>
            <span className="dot">3</span>
          </div>
        </Maindiv>
      </Background>
    );
  }
}

export default Widget;
