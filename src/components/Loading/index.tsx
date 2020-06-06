import React from 'react';
import './Loading.style.scss';

interface Props {
  width: string;
  height: string;
}

export function Loading({ ...dimensions }: Props) {
  return (
    <div id="loading" className="wrapper" style={{ ...dimensions }}>
      <div className="container">
        <div className="element" />
        <div className="element" />
        <div className="element" />
        <div className="element" />
        <div className="element" />
        <div className="element" />
      </div>
    </div>
  );
}
