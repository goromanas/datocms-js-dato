import React from 'react'
import { Wrapper } from './QuestionMark.style'
import { Tooltip } from 'antd'

const QuestionMark = ({ tooltip }) => {
  return (
    <Wrapper>
      <Tooltip title={tooltip} placement="topLeft">
        ?
      </Tooltip>
    </Wrapper>
  )
}

export default QuestionMark
