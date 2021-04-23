import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`
export const IconContainer = styled.div`
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
