/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../Videoplayer.jsx';

const Maindiv = styled.div`
  z-index:1;
  display:flex;
  flex-direction: column;
  position:fixed;
  left: 22%;
  top: 12%;
  width:50%;
  height:70%;
  overflow: auto;
  background-color: white;
  border-radius: 1.2rem;
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
          <div className="slideshow-container" style={{ border: '3px solid red', flexGrow: '2' }}>
            <div className="slideVideo" style={{ border: '3px solid blue', flexGrow: '1' }}>
              <VideoPlayer video={video} />
            </div>
          </div>
          <div className="infobar" style={{ border: '3px solid blue', flexGrow: '1' }}>
            <div className="text" style={{ border: '3px solid green' }}>{video[0].title}</div>
          </div>
          <div style={{ border: '3px solid lime', flexGrow: '1' }}>a </div>
        </Maindiv>
      </Background>
    );
  }
}

export default Widget;
