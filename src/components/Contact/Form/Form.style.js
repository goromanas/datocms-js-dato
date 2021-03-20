import styled from 'styled-components'
import { Input as InputLib, Select as SelectLib, Checkbox as CheckboxLib } from 'antd'
import { colors } from '../../../styles/colors'
import { media } from '../../../styles/media'

const { TextArea: TextAreaLib } = InputLib

export const TextArea = styled(TextAreaLib)`
  max-height: 180px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${media.md`
    flex-direction: row;
  `}
`
export const Input = styled(InputLib)`
  padding: 0.8rem;
  border: 1px solid #06101a;
  min-width: 220px;
  border-radius: 0;
`
export const StyledInput = styled(InputLib)`
  border: 1px solid #06101a;
  border-radius: 0;

  .ant-input-group-addon,
  .ant-input-affix-wrapper {
    padding: 0.8rem;
    border-radius: 0;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper {
    border: none;
    border-radius: 0;
  }
`

export const Select = styled(SelectLib)`
  &.custom-select {
    border: 1px solid #06101a;
    min-width: 220px;
    height: 48px;
    border-radius: 0;
  }

  .ant-select-selector.ant-select-selector {
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
  }
`

export const Checkbox = styled(CheckboxLib)`
  margin-right: 1rem;

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colors.primary};
  }
`
export const FormContainer = styled.form`
  padding: 0 2rem;
`
