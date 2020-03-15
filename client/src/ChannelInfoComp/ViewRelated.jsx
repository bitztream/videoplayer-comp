import React from 'react';
import styled from 'styled-components';
 

const ViewContainer = styled.div` 
  display: flex;
`;

const Views = styled.div`
  display: inline-flex!important;
  align-items: center!important;
  line-height: 25px;
  margin:5px;
  border:0;
  padidng:0;
`;

const Title = styled.div`
  padding-right:2rem!important;
  flex-shrink: 1!important;
  flex-grow: 1!important;
`;
const ViewRelated = (props) => {
  return (

    <ViewContainer>
      <Title><h2>summit chad poke. [ @summit1g ]</h2></Title>
      <Views>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
        </svg>
        <Views>  nubmer 123</Views>
      </Views>
      <Views>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
        </svg>
        <Views>   number </Views>
      </Views>
    </ViewContainer>
  );
};

export default ViewRelated;
