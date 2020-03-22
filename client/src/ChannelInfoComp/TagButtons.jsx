/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const TagButton = styled.button`
  font-size: 14px;
  border-color: buttonface;
  background-color:gainsboro;
  color:dimgray;
  align-items: center;
  padding: 0.1rem .4rem 0.22rem .4rem;
  margin-right: 0.5rem;
  border-radius: .8rem;
  outline: none;
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
