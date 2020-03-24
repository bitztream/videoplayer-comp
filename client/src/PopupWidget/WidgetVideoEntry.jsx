/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {opacity: .4}
  to {opacity: 0.8}
`;

const Slides = styled.div`
  // -webkit-animation-name: ${fade};
  // -webkit-animation-duration: 1.5s;
  // animation-name: ${fade};
  // animation-duration: 1.5s;
`;

class WidgetVideoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.slidesRef = React.createRef();
  }

  // finsished return but not yet render
  // componentDidMount() {
  //   const { page, id, dot } = this.props;
  //   const currentslide = this.slidesRef.current;
  //   currentslide.style.display = 'none';

  //   if (dot === '') {
  //     currentslide.style.display = page === id ? 'block' : 'none';
  //   } else if (dot >= 0) {
  //     currentslide.style.display = parseInt(dot, 10) === id ? 'block' : 'none';
  //   }
  // }

  // componentDidUpdate() {
  //   const { page, id, dot } = this.props;
  //   const currentslide = this.slidesRef.current;
  //   currentslide.style.display = 'none';
  //   if (dot === '') {
  //     currentslide.style.display = page === id ? 'block' : 'none';
  //   } else if (dot >= 0) {
  //     currentslide.style.display = parseInt(dot, 10) === id ? 'block' : 'none';
  //   }
  // }

  render() {
    const { vid } = this.props;
    return (
      <Slides className="slides" ref={this.slidesRef}>
        <figure style={{ margin: '0' }}>
          <video className="video" width="50%" height="50%" controls>
            <source src={vid.video_url} />
          </video>
        </figure>
      </Slides>
    );
  }
}


export default WidgetVideoEntry;
