import styled from "styled-components";

export const WheaterCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #7a7a7a;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px 30px;
  margin-left: 2rem;
`;
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  margin-top: -15px;
`;

export const IconCard = styled.div`
  width: 100%;
  max-width: 120px;
`;

export const TemperatureCard = styled.div`
  font-weight: 300;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
