import { createContext, useContext } from "react";

interface CompoundFormContext {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompoundFormContext = createContext<CompoundFormContext | null>(null);

export const useCompoundFormContext = () => {
  const context = useContext(CompoundFormContext);

  if (!context) {
    throw new Error("CompundForm.* 컴포넌트만 사용 가능합니다");
  }
  return context;
};

export default CompoundFormContext;
