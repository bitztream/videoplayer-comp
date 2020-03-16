/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import React from 'react';
import ViewRelated from './ViewRelated.jsx';
import TagButtons from './TagButtons.jsx';

const LeftTop = styled.div`
  grid-column: 1 / 13;
  grid-row:1;
  padding-left:20px;
`;

const PicColum = styled.div`
  display:flex;
  align-items: center;
`;

const ImgDiv = styled.div`
  margin-right: 1rem;
`;

const CateDiv = styled.div`
  display:flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
`;
const CatP = styled.p`
  margin:0 0.5rem 0.7rem 0;
`;

const ChannelContainer = () => {
  const img = { width: '3rem', height: '4.5rem' };
  return (
    <LeftTop>
      <ViewRelated />
      <PicColum>
        <ImgDiv><img src="https://picsum.photos/420/320" alt="" style={img} /></ImgDiv>
        <div>
          <CateDiv>
            <CatP>Category: link </CatP>
            <CatP>•</CatP>
            <CatP>Team: link </CatP>
          </CateDiv>
          <TagButtons />
        </div>
      </PicColum>
    </LeftTop>
  );
};

export default ChannelContainer;
