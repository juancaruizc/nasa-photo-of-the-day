import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 80%;
`;

const Picture = (props) => {
  const { nasaData } = props;
  return (
    <div>
      <StyledImg src={nasaData.url} alt='nasa pick of the day' />
    </div>
  );
};

export default Picture;
