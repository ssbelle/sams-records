import React, {Component} from 'react';

export const Record = (props) => {
  console.log('record props', props);
  return (
    <li>{props.artist}-{props.title}</li>
  );
};

export default Record;
