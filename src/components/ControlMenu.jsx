import React from 'react'

export default function ControlMenu({ value, onChange, optionList }) {
  return (
    <select     
        className='ControlMenu'
        value={value}    
        onChange={(e) => onChange(e.target.value)}
    >
        {optionList.map((it) => (
          <option key={it.value} value={it.value}>
            {it.name}
          </option>
        ))}
    </select>
  )
}

