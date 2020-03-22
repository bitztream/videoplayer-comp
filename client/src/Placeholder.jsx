import React from 'react';
import styled from 'styled-components';

const PlaceholderDiv = styled.div`
  height: 18rem;
  width: 22rem;
`;

const Placeholder = () => (
  <div style={{
    display: 'flex', margin: '1.2rem', flexWrap: 'wrap', justify: 'center',
  }}
  >
    <PlaceholderDiv />
    <PlaceholderDiv />
    <PlaceholderDiv />
    <PlaceholderDiv />
  </div>

);

export default Placeholder;
