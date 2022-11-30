import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate() 
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }
  const goDetail = () => {
    navigate(`/diary/${id}`, { state: { id, emotion, content, date }})
  }
  const strDate = new Date(parseInt(date)).toLocaleDateString()
  return (
    <div className='Diaryitem'>
      <div onClick={goDetail} className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}/>
      </div>
      <div onClick={goDetail} className='info_wrapper'>
        <div className='diary_date'>{strDate}</div>
        <div className='diary_content_preview'>{content.slice(0, 25)}</div>
      </div>
      <div className='btn_wrapper'>
        <Button onClick={goEdit} text={'Edit'}/>
      </div>
    </div>
  )
}

