/* eslint-disable import/extensions */
import styled from 'styled-components';
import React from 'react';
import ViewRelated from './ViewRelated.jsx';

const ChannelContainer = () => (
  <div className="whole-flexbox">
    <ViewRelated />

    <div className="tw-flex.tw">
      <img src="" alt="" />
      <div className="caterogy title">
        <p>Category: link </p>
        <p>Team: link </p>
      </div>

      <div className="tags">
        <button type="button">tags</button>
        <button type="button">tags</button>
        <button type="button">tags</button>
      </div>
    </div>


  </div>
);

export default ChannelContainer;
