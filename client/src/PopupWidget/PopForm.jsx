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
  width:400px;
  height:550px;
  overflow: auto;
  background-color: white;
  border-radius: 1.2rem;
  box-shadow: -6px 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    margin: -5px 0px 0px 5px;
    box-shadow: -4px 4px 6px #9147ff, 0 2px 3px 0 rgba(0, 0, 0, 0.19);
  }
  
`;

const Background = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.1);
`;

const Dotdiv = styled.div`
  text-align: center; 
  margin-top: 15px;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 0.6rem;
  width: 0.6rem;
  margin-right: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  &:hover {
  padding-top: 3px;
  background-color: #717171;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`;

const Infobar = styled.div`
  flexGrow: 1;
  text-align: center;
`;

const Title = styled.span`
  text-shadow: 1px 1px 2px #000000;
  color: #2e2f3e;
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
          <Infobar>
            <Title>
              <h3>{video[0].title}</h3>
              <h3>@</h3>
              <h3>{video[0].name}</h3>
            </Title>
          </Infobar>
          <div style={{ flexGrow: '1' }}>
            <Dotdiv>
              {video[0].videos.map(
                (vid, idx) => <Dot key={idx} id={idx} onClick={this.handleClick} />,
              )}
            </Dotdiv>
          </div>
        </Maindiv>
      </Background>
    );
  }
}

export default Widget;
