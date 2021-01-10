import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.div`
  display: flex;
`;

const Date = (props) => {
  const { nasaData } = props;
  return (
    <StyledDate>
      <h3>{nasaData.date}</h3>
    </StyledDate>
  );
};

export default Date;
