import React from 'react'

function IconWrapper({icon, size,color, style}) {
  return (
    <div style={{
        fontSize: size,
        color: color || '#ff014f',
        ...style
    }}>{icon}</div>
  )
}

export default IconWrapper