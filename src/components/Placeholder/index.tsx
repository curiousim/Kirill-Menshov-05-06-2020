import React from 'react';
import './Placeholder.style.scss';

interface Props {
  width: string;
  height: string;
  content: string;
}

export function Placeholder({ height, width, content }: Props) {
  return (
    <div className="placeholder" style={{ width: width, height: height }}>
      {content}
    </div>
  );
}
