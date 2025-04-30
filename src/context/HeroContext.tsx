"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import heroData from "@/data/heroData.json"; // Replace with API call if needed

// Define the shape of the Hero Data
type HeroData = {
  heading: string;
  subheading: string;
  features: string[];
  ctaText: string;
  ctaDescription: string;
  imageSrc: string;
  imageAlt: string;
};

// Define the context type
type HeroContextType = {
  heroData: HeroData | null;
  loading: boolean;
  error: string | null;
};

// Create the context
const HeroContext = createContext<HeroContextType | undefined>(undefined);

// Create the provider component
export const HeroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Simulate fetching data (replace with API call if needed)
        setData(heroData);
        setLoading(false);
      } catch (err) {
        setError(`Failed to load hero data. ${err}`);
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);
  //! use usememo for performance optimization (if needed)
  // const value = useMemo(() => ({ heroData: data, loading, error }), [data, loading, error]);
  return (
    <HeroContext.Provider value={{ heroData: data, loading, error }}>
      {children}
    </HeroContext.Provider>
  );
};

// Create a custom hook to use the HeroContext
export const useHeroContext = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHeroContext must be used within a HeroProvider");
  }
  return context;
};