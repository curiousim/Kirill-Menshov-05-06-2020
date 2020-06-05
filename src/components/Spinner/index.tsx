import React from 'react';
import './Spinner.style.css';

interface Props {
  size: number;
}

export function Spinner({ size }: Props) {
  const circles = [...Array(12)].map((_, index) => (
    <div
      key={index}
      style={{
        background: '#c5c5c5',
        width: size * 0.075,
        height: size * 0.075,
      }}
    />
  ));

  return (
    <div className={'lds-default'} style={{ height: size, width: size }}>
      {circles}
    </div>
  );
}
