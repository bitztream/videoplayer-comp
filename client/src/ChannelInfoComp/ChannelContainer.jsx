/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import React from 'react';
import ViewRelated from './ViewRelated.jsx';
import TagButtons from './TagButtons.jsx';

const LeftTop = styled.div`
  grid-column: 1 / 16;
  grid-row:1;
  padding-left:1.25rem;
  @media only screen and (max-width: 600px) {
    grid-column: 1/16;
  }
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
  font-size: 14px;
`;

const SpanTitle = styled.span`
  color: #9147ff;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
    cursor:pointer;
  }
  
`;

const ChannelContainer = (props) => {
  const img = { width: '3.1rem', height: '4rem' };
  const { video, handleClick } = props;

  return (
    <LeftTop>
      <ViewRelated video={video} />
      <PicColum>
        <ImgDiv><img src="https://picsum.photos/420/320" alt="" style={img} /></ImgDiv>
        <div>
          <CateDiv>
            <CatP>
              Category:
              <SpanTitle>{video[0].videos[0].category}</SpanTitle>
            </CatP>
            <CatP>•</CatP>
            <CatP>
              Team:
              <SpanTitle>{video[0].team}</SpanTitle>
            </CatP>
          </CateDiv>
          <TagButtons video={video} handleClick={handleClick} />
        </div>
      </PicColum>
    </LeftTop>
  );
};

export default ChannelContainer;
