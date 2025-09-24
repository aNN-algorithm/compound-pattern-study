"use client";
import CompoundForm from "@/components/CompoundForm";

export default function Home() {
  const onChangeCompoundInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div>
      {/* CompoundForm 이라는 부모 컴포넌트 안에서 Input과 Label을 자식처럼 붙여서 사용 */}
      <CompoundForm>
        {/* CompoundForm.Input 은 실제 <input>을 감싸는 하위 컴포넌트 */}
        <CompoundForm.Input onChange={onChangeCompoundInput} />
        {/* CompoundForm.Label 은 단순한 레벨 */}
        <CompoundForm.Label title="테스트123" />
      </CompoundForm>
    </div>
  );
}
