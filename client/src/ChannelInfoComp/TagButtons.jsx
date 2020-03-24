/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const TagButton = styled.button`
  font-size: 12px;
  border-color: buttonface;
  background-color:gainsboro;
  color:black;
  opacity: 70%;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: .8rem;
  outline: none;
  text-align: center;
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const TagButtons = (props) => {
  const { video, handleClick } = props;
  return (
    <div className="tags" style={{ display: 'flex' }}>
      {video[0].videos[0].tags.map((tag, idx) => (
        <TagButton type="button" key={idx} data-tag={tag} onClick={handleClick}>{tag}</TagButton>
      ))}
    </div>
  );
};

export default TagButtons;
