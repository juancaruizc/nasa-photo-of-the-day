import React from 'react';
import styled from 'styled-components';

const StyledExplanation = styled.p`
  width: 50%;
`;
const Explanation = ({ nasaData }) => {
  return (
    <div>
      <StyledExplanation>{nasaData.explanation}</StyledExplanation>
    </div>
  );
};

export default Explanation;
