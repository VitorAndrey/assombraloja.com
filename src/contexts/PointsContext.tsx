"use client";

import { ReactNode, createContext, useState } from "react";

type PointsContextType = {
  points: number;
};

export const PointsContext = createContext({} as PointsContextType);

export function PointsContextProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState<number>(0);

  return (
    <PointsContext.Provider
      value={{
        points,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}
