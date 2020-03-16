/* eslint-disable linebreak-style */
import styled from 'styled-components';
import React from 'react';

const TagButton = styled.button`
  font-size: 0.8rem;
  border-color: buttonface;
  background-color:gainsboro;
  color:dimgray;
  align-items: center;
  padding: 0 .9rem;
  margin-right: 0.5rem;
  border-radius: 16px;
`;

const TagButtons = () => (
  <div className="tags" style={{ display: 'flex' }}>
    <TagButton type="button">tags</TagButton>
    <TagButton type="button">tags</TagButton>
    <TagButton type="button">tags</TagButton>
  </div>
);

export default TagButtons;
