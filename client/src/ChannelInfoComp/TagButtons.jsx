/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
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
  border-radius: 1rem;
`;

const TagButtons = (props) => {
  const { video, handleClick } = props;
  return (
    <div className="tags" style={{ display: 'flex' }}>
      {video[0].videos[0].tags.map((tag, idx) => (
        <TagButton type="button" key={idx} id={tag} onClick={handleClick}>{tag}</TagButton>
      ))}
    </div>
  );
};

export default TagButtons;
