import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { LoadingContainer, Spin } from './Loading.style'
import { colors } from '../../styles/colors'

const antIcon = <LoadingOutlined style={{ fontSize: 48, color: colors.primary }} spin />

const Loading = () => {
  return (
    <LoadingContainer>
      <Spin indicator={antIcon} />
    </LoadingContainer>
  )
}

export default Loading
