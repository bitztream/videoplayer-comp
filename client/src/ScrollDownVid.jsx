/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  z-index:1;
  background-color: Transparent;
  cursor:pointer;
  border-radius: 0.5rem;
  &:hover {
    fill:black;
  }
`;

const FloatVid = styled.div`
  z-index:2;
  left: 1.0rem;
  bottom: 1.0rem;
  width: 100%;
  height: 100%;
`;

const FloatMenu = styled.div`
  z-index:1;
  position: fixed;
  left: 1.0rem;
  bottom: 1.0rem;
  width: 323px;
  height: 182px;
  display: none;
  .topBar {
    z-index:2;
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    justify-items: start; 
    background-color: rgba(0,0,0,0.5);
    padding: 10px 10px 0 10px;
    color: white;
    font-size: 14px;
    fill: white;
  }
  .botBar {
    display: flex; 
    flex-direction: row; 
    margin: 40px 75px 40px 75px; 
    justify-content: space-evenly;
    fill: white;
    .up {
      fill: white;
      &:hover {
        fill: black;
      }
    }
  }
`;

const FloatMaster = styled.div`
  z-index:1;
  position: fixed;
  left: 1.0rem;
  bottom: 1.0rem;
  width: 323px;
  height: 182px;
  &:hover ${FloatMenu} {
    display: block;
    background-color: rgba(0,0,0,0.5);
  }`;


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
      <FloatMaster>
        <FloatMenu>
          <div className="topBar">
            <div>
              Watching
              {' '}
              {video[0].name}
            </div>
            <div>
              <Button type="button" className="close" onClick={closeVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" /></svg>
              </Button>
            </div>
          </div>

          <div className="botBar">
            <div><a href="#target" role="button"><svg className="up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0-22c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2 14h-4v-1h4v1zm0 1v1h-4v-1h4zm-4-6h-4l6-6 6 6h-4v3h-4v-3z" /></svg></a></div>
            <div>
              <Button type="button" onClick={this.playvid}>
                {play ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 7v10l7-5-7-5z" />
                  </svg>
                ) : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5 0h-3v-10h3v10z" /></svg> }
              </Button>
            </div>
          </div>
        </FloatMenu>

        <FloatVid>
          <video className="video" width="100%" height="100%" ref={this.vidRef} controls>
            <source src={videoUrl} />
          </video>
        </FloatVid>
      </FloatMaster>
    );
  }
}

export default ScrollDownVidList;
