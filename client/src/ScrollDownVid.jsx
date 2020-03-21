/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  // display:none;
  z-index:1;
  color: black;
  // position: absolute;
  // right: 1.2rem;
  // top: 0.5rem;
  background-color: Transparent;
  // border: none;
  cursor:pointer;
  // outline:none;
  font-size: 14px;
  &:hover {
    font-weight: 900;
  }
`;

const Close = styled.div`
  // display:none;
  // z-index:1;
  // color: white;
  // position: absolute;
  // left: 1.2rem;
  // top: 0.5rem;
  // left: 1.0rem;
  // bottom: 1.0rem;
  // font-size: 14px;
  z-index:1;
  position: fixed;
  left: 1.0rem;
  bottom: 1.0rem;
  border-radius: 0.5rem;
`;

const FloatVid = styled.div`
  z-index:1;
  position: fixed;
  left: 1.0rem;
  bottom: 1.0rem;
  border-radius: 0.5rem;
  &:hover {${Close}, ${Button} {
    display: block;
  }}
`;

class ScrollDownVidList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true,
    };
    this.vidRef = React.createRef();
    this.playvid = this.playvid.bind(this);
  }

  playvid() {
    const { play } = this.state;
    play ? this.vidRef.current.play() : this.vidRef.current.pause();
    this.setState({ play: !play });
  }

  render() {
    const { video, closeVideo } = this.props;
    const { play } = this.state;
    const videoUrl = video[0].videos[0].video_url;
    return (
      <div style={{ border: '2px solid green' }}>
        <div style={{ border: '2px solid yellow' }}>
          <div>
            Watching
            {' '}
            {video[0].name}
            <Button type="button" onClick={closeVideo}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" /></svg>
            </Button>
          </div>

          <div>
            <Button type="button" onClick={this.playvid}>
              {play ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 7v10l7-5-7-5z" />
                </svg>
              ) : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5 0h-3v-10h3v10z" /></svg> }
            </Button>
          </div>
          <div><a href="#target" role="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0-22c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2 14h-4v-1h4v1zm0 1v1h-4v-1h4zm-4-6h-4l6-6 6 6h-4v3h-4v-3z" /></svg></a></div>
        </div>


        <FloatVid>
          <video className="video" width="300px" height="100%" ref={this.vidRef} controls>
            <source src={videoUrl} />
          </video>
        </FloatVid>

      </div>
    );
  }
}

export default ScrollDownVidList;
