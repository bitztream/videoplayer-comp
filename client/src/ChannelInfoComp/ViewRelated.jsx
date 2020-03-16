/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import Views from './Views.jsx';

const TitleView = styled.div`
  display:grid;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-rows: minmax(5px, auto);
`;

const Title = styled.div`
  grid-column:1/10;
  grid-row:1;
  justify-items: start;
`;


const ViewRelated = (props) => {
  return (
    <TitleView>
      <Title className="title"><h2>summit chad poke. [ @summit1g ]</h2></Title>
      <Views />
    </TitleView>
  );
};

export default ViewRelated;
