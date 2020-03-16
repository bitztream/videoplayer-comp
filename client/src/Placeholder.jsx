import React from 'react';
import styled from 'styled-components';

const PlaceholderDiv = styled.div`
  height: 300px;
  width: 500px;
`;

const Placeholder = () => (
  <div style={{ display: 'flex' }}>
    <div>
      <PlaceholderDiv>Content</PlaceholderDiv>
      <PlaceholderDiv>Content</PlaceholderDiv>
    </div>
    <div>
      <PlaceholderDiv>Content</PlaceholderDiv>
      <PlaceholderDiv>Content</PlaceholderDiv>
    </div>
    <div>
      <PlaceholderDiv>Content</PlaceholderDiv>
      <PlaceholderDiv>Content</PlaceholderDiv>
    </div>
    <div>
      <PlaceholderDiv>Content</PlaceholderDiv>
      <PlaceholderDiv>Content</PlaceholderDiv>
    </div>
  </div>

);

export default Placeholder;
