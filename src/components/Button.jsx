import React from 'react'

export default function Button({ text, type, onClick }) {
  const btnType = ['positive', 'negative'].includes(type)? type : 'default'
  return (
    <button className={['MyButton', `MyButton_${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  type: 'default'
}