"use client";

import { useState, useEffect } from "react";

export const useMediaQuery = (minWidth: number) => {
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsAbove(window.innerWidth >= minWidth);
    };

    // Vérification initiale
    checkScreenSize();

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [minWidth]);

  return isAbove;
};
