import React from 'react';

interface IframeContainerProps {
  src: string;
}

export function IframeContainer({ src }: IframeContainerProps) {
  return (
    <div className="w-full max-w-4xl h-[600px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src={src}
        className="w-full h-full"
        title="Content Frame"
      />
    </div>
  );
}