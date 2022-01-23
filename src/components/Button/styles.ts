import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid #7a7a7a;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background: rgba(0, 0, 0, 0.5);
  }
`;
const breatheAnimation = keyframes`
 0% {     transform: rotate(0deg); }
 100% {  transform: rotate(360deg); }
`;

export const Loading = styled.button`
  box-sizing: border-box;
  display: block;
  width: 30px;
  height: 30px;
  border: 4px solid #fff;
  border-radius: 50%;
  border-color: #fff transparent transparent transparent;
  border-style: solid;
  background-color: transparent;
  animation: ${breatheAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;
