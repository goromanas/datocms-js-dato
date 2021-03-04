import styled from 'styled-components'
import { Input as InputLib, Select as SelectLib } from 'antd'

const { TextArea: TextAreaLib } = InputLib

export const TextArea = styled(TextAreaLib)`
  max-height: 180px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const Input = styled(InputLib)`
  padding: 0.8rem;
  border: 1px solid #06101a;
`
export const StyledInput = styled(InputLib)`
  border: 1px solid #06101a;

  .ant-input-group-addon,
  .ant-input-affix-wrapper {
    padding: 0.8rem;
  }
`

export const Select = styled(SelectLib)`
  &.custom-select {
    border: 1px solid #06101a;
    min-width: 220px;
    width: 250px;
  }

  .ant-select-selector {
    height: 50px;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
