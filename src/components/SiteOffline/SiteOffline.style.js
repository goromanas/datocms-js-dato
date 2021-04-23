import styled from 'styled-components'

export const OfflineContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OfflineMessage = styled.div`
  font-size: 1.1rem;
`

export const Separator = styled.div`
  height: 40px;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
`
