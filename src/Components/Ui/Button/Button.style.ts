import styled from "styled-components";

interface StyledButtonProps {
  bgColor?: string;
  txColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.txColor || "#fff"};
  padding: 8px 18px;
  border: none;
  box-shadow: #5e5df0 0 10px 20px -10px;
  border-radius: 20px 0;
  font-weight: 700;
  outline: 0 solid transparent;
  overflow: hidden;
  .button__background {
    transition: 0.3s;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background: ${(props) => props.bgColor || "#5E5DF0"};
  }
  .button__content {
    z-index: 2;
  }
  :hover {
    cursor: pointer;
    .button__background {
      filter: brightness(0.9);
    }
  }
  :active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px inset,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px inset;
  }
`;
