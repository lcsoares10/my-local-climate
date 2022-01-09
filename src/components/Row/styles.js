import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
