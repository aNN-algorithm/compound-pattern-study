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
      <CompoundForm>
        <CompoundForm.Input onChange={onChangeCompoundInput} />
        <CompoundForm.Label title="테스트" />
      </CompoundForm>
    </div>
  );
}
