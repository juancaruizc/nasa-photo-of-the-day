import React from 'react';

const Explanation = (props) => {
  const { nasaData } = props;
  return (
    <div>
      <p>{nasaData.explanation}</p>
    </div>
  );
};

export default Explanation;
