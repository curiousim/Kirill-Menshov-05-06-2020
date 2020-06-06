import React from 'react';
import './Placeholder.style.scss';

interface Props {
  width: string;
  height: string;
  color: string;
  content: string;
}

export function Placeholder({ height, width, color, content }: Props) {
  return (
    <div
      className="placeholder"
      style={{ width: width, height: height, color: color }}
    >
      {content}
    </div>
  );
}
