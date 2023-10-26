import React, {createContext, useState} from 'react';

interface ImageColors {
  dominant: string;
  average: string;
  lightVibrant: string;
}

interface ContextProps {
  currColors: ImageColors;
  prevColors: ImageColors;
  setCurrentColors: (colors: ImageColors) => void;
  setPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [currColors, setCurrColors] = useState<ImageColors>({
    dominant: 'transparent',
    average: 'transparent',
    lightVibrant: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    dominant: 'transparent',
    average: 'transparent',
    lightVibrant: 'transparent',
  });

  const setCurrentColors = (colors: ImageColors) => {
    setCurrColors(colors);
  };

  const setPreviousColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{currColors, prevColors, setCurrentColors, setPreviousColors}}>
      {children}
    </GradientContext.Provider>
  );
};
