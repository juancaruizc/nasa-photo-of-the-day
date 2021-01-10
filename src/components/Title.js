import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  background-color: black;
  color: white;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = (props) => {
  const { nasaData } = props;
  return (
    <StyledTitle>
      <h2>{nasaData.title}</h2>
    </StyledTitle>
  );
};

export default Title;
