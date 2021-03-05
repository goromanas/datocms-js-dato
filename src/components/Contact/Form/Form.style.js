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
  min-width: 220px;
`
export const StyledInput = styled(InputLib)`
  border: 1px solid #06101a;

  .ant-input-group-addon,
  .ant-input-affix-wrapper {
    padding: 0.8rem;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper {
    border: none;
  }
`

export const Select = styled(SelectLib)`
  &.custom-select {
    border: 1px solid #06101a;
    min-width: 220px;
    height: 48px;
  }

  .ant-select-selector.ant-select-selector {
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
