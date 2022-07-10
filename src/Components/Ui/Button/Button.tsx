import { StyledButton } from "./Button.style";

interface ButtonProps {
  bgColor?: string;
  txColor?: string;
  content: React.ReactNode;
}

export default function UiButton(props: ButtonProps) {
  const { content, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <div className="button__background" />
      <span className="button__content">{content}</span>
    </StyledButton>
  );
}
