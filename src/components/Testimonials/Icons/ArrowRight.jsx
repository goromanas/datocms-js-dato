import React from 'react'

const ArrowRight = (props, { fill = '#06101a', className }) => (
  <svg viewBox="0 0 24.4 44.58" {...props} width="14px" height="24px" className={className}>
    <path
      d="M.44,2.56A1.5,1.5,0,0,1,1.5,0,1.53,1.53,0,0,1,2.56.44l20.8,20.79s.07.07.08.11l1,1L2.55,44.15a1.51,1.51,0,0,1-2.12,0A1.54,1.54,0,0,1,.43,42L20.17,22.28Z"
      fill={fill}
    />
  </svg>
)

export default ArrowRight
