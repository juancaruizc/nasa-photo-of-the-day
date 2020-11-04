import React from 'react';

const Picture = (props) => {
  const { nasaData } = props;
  return (
    <div>
      <img src={nasaData.url} />
    </div>
  );
};

export default Picture;
