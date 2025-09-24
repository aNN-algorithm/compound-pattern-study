import styled from "@emotion/styled";

interface CompoundWrapperStyleProps {
  isFocus: boolean;
}

const CompoundComponentWrapper = styled.div<CompoundWrapperStyleProps>`
  border: solid 1px ${(props) => (props.isFocus ? "blue" : "red")};
`;

export { CompoundComponentWrapper };
