import React, {Component} from 'react';
import Record from './record.js';

export const RecordList = (props) => {
  console.log('List props', props);
  return (
    <ul>
    {props.list.map((record) => {
      return (
        <Record
          title={record.title}
          artist={record.artist}
        />
      );
    }
    )}
    </ul>
  );
};

export default RecordList;
