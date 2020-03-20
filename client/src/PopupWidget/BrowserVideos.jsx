/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// const Slides = styled.div`
//   -webkit-animation-name: fade;
//   -webkit-animation-duration: 1.5s;
//   animation-name: fade;
//   animation-duration: 1.5s;

//   @-webkit-keyframes fade {
//     from {opacity: .4}
//     to {opacity: 1}
//   }
// `;

const BrowserVideos = ({
  vid, page, id, dot,
}) => {
  let style = { display: 'none' };
  if (dot === '') {
    if (page === id) {
      style = { display: 'block' };
    } else { style = { display: 'none' }; }
  } else if (dot >= 0) {
    if (parseInt(dot, 10) === id) {
      style = { display: 'block' };
    } else { style = { display: 'none' }; }
  }

  return (
    <div className="slides" style={style}>
      <figure style={{ margin: '0' }}>
        <video className="video" width="100%" height="auto" controls>
          <source src={vid.video_url} />
        </video>
      </figure>
    </div>
  );
};


export default BrowserVideos;
