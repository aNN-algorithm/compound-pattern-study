import React, { useContext } from "react";
import { useState } from "react";
import Icon from "../../public/Icon";

type FlyOutContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

type FlyOutProps = {
  children: React.ReactNode;
};

const FlyOutContext = React.createContext<FlyOutContextValue | undefined>(
  undefined
);
export default function FlyOut({ children }: FlyOutProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div>
      <FlyOutContext.Provider value={{ open, setOpen, toggle }}>
        {children}
      </FlyOutContext.Provider>
    </div>
  );
}

function Toggle() {
  const { toggle } = useContext(FlyOutContext)!;

  return (
    <div>
      <Icon />
    </div>
  );
}
