/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Videos from './Videos.jsx';

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

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 1rem 2rem 1rem 0;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &:hover {
  background-color: #717171;
`;


class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dot: '',
    };
    this.popupRef = React.createRef();
    this.backgroundRef = React.createRef();
    this.callback = this.callback.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetDot = this.resetDot.bind(this);
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

  handleClick(e) {
    this.setState({ dot: e.target.id });
  }

  resetDot() {
    this.setState({ dot: '' });
  }

  render() {
    const { video } = this.props;
    const { dot } = this.state;
    return (
      <Background ref={this.backgroundRef}>
        <Maindiv ref={this.popupRef}>
          <Videos video={video} dot={dot} resetDot={this.resetDot} />
          <div className="infobar" style={{ border: '3px solid blue', flexGrow: '1' }}>
            <span>
              {video[0].title}
              @
              {video[0].name}
            </span>
          </div>
          <div style={{ border: '3px solid lime', flexGrow: '1' }}>
            <div style={{ textAlign: 'center' }}>
              {video[0].videos.map(
                (vid, idx) => <Dot key={idx} id={idx} onClick={this.handleClick} />,
              )}
            </div>
          </div>
        </Maindiv>
      </Background>
    );
  }
}

export default Widget;
