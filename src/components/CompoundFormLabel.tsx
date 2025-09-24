interface CompoundFormLabelProps {
  title: string;
}

// 라벨도... 구조화 하는군...
function CompoundFormLabel({ title }: CompoundFormLabelProps) {
  return <div>{title}</div>;
}

export default CompoundFormLabel;
