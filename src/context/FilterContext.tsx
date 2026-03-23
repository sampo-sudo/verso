import { createContext, useContext, useState, type ReactNode } from "react";
import type { FilterState } from "../data/types";

const defaultFilters: FilterState = {
  searchQuery: "",
  certifications: [],
  maxPrice: 5,
  minRating: 0,
};

interface FilterContextType {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType>({
  filters: defaultFilters,
  setFilters: () => {},
  resetFilters: () => {},
});

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const resetFilters = () => setFilters(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
