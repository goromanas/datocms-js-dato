import React from 'react'
import { Wrapper, Popover, PopoverContainer } from './QuestionMark.style'

const QuestionMark = ({ tooltip }) => {
  const PopoverContent = () => {
    return <PopoverContainer>{tooltip}</PopoverContainer>
  }
  return (
    <Popover content={<PopoverContent />} placement="top">
      <Wrapper>?</Wrapper>
    </Popover>
  )
}

export default QuestionMark
