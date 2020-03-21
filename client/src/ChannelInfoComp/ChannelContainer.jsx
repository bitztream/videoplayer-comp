/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import React from 'react';
import ViewRelated from './ViewRelated.jsx';
import TagButtons from './TagButtons.jsx';

const LeftTop = styled.div`
  grid-column: 1 / 13;
  grid-row:1;
  padding-left:1.25rem;
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

const ChannelContainer = (props) => {
  const img = { width: '3rem', height: '4.5rem' };
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
              <span style={{ color: '#9147ff', marginLeft: '5px' }}>{video[0].videos[0].category}</span>
            </CatP>
            <CatP>•</CatP>
            <CatP>
              Team:
              <span style={{ color: '#9147ff', marginLeft: '5px' }}>{video[0].team}</span>
            </CatP>
          </CateDiv>
          <TagButtons video={video} handleClick={handleClick} />
        </div>
      </PicColum>
    </LeftTop>
  );
};

export default ChannelContainer;
