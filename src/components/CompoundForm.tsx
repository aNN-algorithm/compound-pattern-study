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

function CompoundForm({ children }: CompoundFormProps) {
  const [isFocus, setIsFocus] = useState<FocusState>(false);

  return (
    <CompoundFormContext.Provider value={{ isFocus, setIsFocus }}>
      <CompoundComponentWrapper isFocus={isFocus}>
        {children}
      </CompoundComponentWrapper>
    </CompoundFormContext.Provider>
  );
}

CompoundForm.Input = CompoundFormInput;
CompoundForm.Label = CompoundFormLabel;

export default CompoundForm;
