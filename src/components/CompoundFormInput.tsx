import { useCompoundFormContext } from "./CompoundFormContext";

interface CompoundFormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// input을 감싼 컴포넌트
// onFocus 이벤트가 발생하면 setIsFocus -> true
// onBlur 이벤트가 발생하면 setIsBlur -> true
// 부모로부터 onChange를 받아와 입력값 처리
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
