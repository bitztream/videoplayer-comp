/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import Views from './Views.jsx';

const TitleView = styled.div`
  display:grid;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-rows: minmax(0.325rem, auto);
`;

const Title = styled.div`
  grid-column:1/10;
  grid-row:1;
  justify-items: start;
`;


const ViewRelated = ({ video }) => (
  <TitleView>
    <Title className="title"><h2>{video[0].title}</h2></Title>
    <Views video={video} />
  </TitleView>
);

export default ViewRelated;
