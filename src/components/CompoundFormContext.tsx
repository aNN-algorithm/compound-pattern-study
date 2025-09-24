import { createContext, useContext } from "react";

interface CompoundFormContext {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompoundFormContext = createContext<CompoundFormContext | null>(null);
// isFocus와 setIsFocus를 담는 context 정의
// 하위에서 useCompoundFormContext를 꺼내 쓸 수 있음

export const useCompoundFormContext = () => {
  const context = useContext(CompoundFormContext);

  if (!context) {
    throw new Error("CompoundForm.* 컴포넌트만 사용 가능합니다");
  }
  return context;
};

export default CompoundFormContext;
