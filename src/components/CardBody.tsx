import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type CardBodyProps = {
  desc: string;
};

const CardBody = ({ desc }: CardBodyProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [textSize, setTextSize] = useState<number>(1);

  useLayoutEffect(() => {
    if (ref.current !== null) {
      setClientHeight(ref.current.clientHeight);
      setScrollHeight(ref.current.scrollHeight);
    }
  });

  useEffect(() => {
    if (textSize > 0.7 && scrollHeight > clientHeight) {
      setTextSize((prev) => prev - 0.1);
    }
  }, [scrollHeight, clientHeight]);

  return (
    <div
      ref={ref}
      style={{
        fontSize: `${textSize}em`,
        // whiteSpace: 'pre-wrap',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="cardBody"
    >
      {desc.length}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{desc}</ReactMarkdown>
    </div>
  );
};

export default CardBody;
