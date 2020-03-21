/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const ViewGrid = styled.div`
  grid-column: 16;
  grid-row:1;
  justify-content: flex-end;
  display: flex;
  @media only screen and (max-width: 500px) {
    margin-bottom: 20px;
    grid-column: 11/13;
  }
`;

const FlexViewDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right:12px;

  &.tw-icon__svg {
    color: #e91916;
    fill: #e91916;
  }
`;

const ViewDiv = styled.div`
  margin-left:.5rem;
`;

const Views = ({ video }) => (
  <ViewGrid>
    <FlexViewDiv className="tw-icon__svg">
      <svg width="24" height="24" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
        <g>
          <path fillRule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" />
        </g>
      </svg>
      <ViewDiv>
        {video[0].watching}
      </ViewDiv>
    </FlexViewDiv>
    <FlexViewDiv>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
      </svg>
      <ViewDiv>
        {video[0].totalViewer}
      </ViewDiv>
    </FlexViewDiv>
  </ViewGrid>
);

export default Views;
