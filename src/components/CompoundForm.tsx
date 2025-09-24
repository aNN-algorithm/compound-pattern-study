"use client";

import { ReactNode, useState } from "react";
import CompoundFormContext from "./CompoundFormContext";
import CompoundFormInput from "./CompoundFormInput";
import CompoundFormLabel from "./CompoundFormLabel";
import { CompoundComponentWrapper } from "./CompoundWrapperStyleProps";

interface CompoundFormProps {
  children: ReactNode;
}

type FocusState = boolean;

// 부모 컴포넌트
// Context API 사용
function CompoundForm({ children }: CompoundFormProps) {
  // isFocus: Input이 포커스되면 true, 포커스를 잃으면 false
  const [isFocus, setIsFocus] = useState<FocusState>(false); // FocusState 근데 이걸 굳이..?

  return (
    // isFocus와 setIsFocus를 하위 컴포넌트에 전달
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      {/* isFocus 상태에 따라 border 색을 바꿈 */}
      <CompoundComponentWrapper isFocus={isFocus}>
        {children}
      </CompoundComponentWrapper>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
CompoundForm.Label = CompoundFormLabel;

export default CompoundForm;
