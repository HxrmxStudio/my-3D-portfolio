import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-white text-lg font-semibold mb-4">
          {progress.toFixed(2)}%
        </p>
        <div className="w-64 h-2 bg-primary rounded-full overflow-hidden">
          <div
            className="h-full bg-[#915eff] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
