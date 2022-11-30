import React from 'react'

export default function EmotionItem({ id, img, descript, onClick, isSelected }) {
  return (
    <div 
        className={['EmotionItem', isSelected? `EmotionItem_on_${id}` : `EmotionItem_off`].join(' ')}
        onClick={() => onClick(id)}    
    >
        <img alt={id} src={img}/>
        <span>{descript}</span>
    </div>
  )
}

