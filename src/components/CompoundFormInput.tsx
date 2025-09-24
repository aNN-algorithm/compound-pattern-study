import { useCompoundFormContext } from "./CompoundFormContext";

interface CompoundFormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CompoundFormInput({ onChange }: CompoundFormInputProps) {
  const { setIsFocus } = useCompoundFormContext();

  const onClickInFocus = () => {
    setIsFocus(true);
  };
  const onClickOutFocus = () => {
    setIsFocus(false);
  };

  return (
    <input
      onChange={onChange}
      onFocus={onClickInFocus}
      onBlur={onClickOutFocus}
    />
  );
}

export default CompoundFormInput;
