import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;
