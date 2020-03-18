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

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.popupRef = React.createRef();
    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.callback);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.callback);
  }

  callback(e) {
    const { popuphandleClick, parentref } = this.props;
    console.log(this.popupRef.current);
    if (!parentref.current.contains(e.target)) {
      popuphandleClick(e);
    }
  }

  render() {
    const { video } = this.props;

    return (
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
    );
  }
}

export default Widget;
