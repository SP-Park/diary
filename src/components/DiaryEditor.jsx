import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Button from './Button'
import EmotionItem from './EmotionItem'
import { emotionList } from '../utils/data'
import { getStringDate } from '../utils/date'
import { useNavigate } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'

// CREATE & EDIT

export default function DiaryEditor({ isEdit, data }) {
  const navigate = useNavigate()
  const contentRef = useRef()  // 포커싱
  const [content, setContent] = useState('')
  const [date, setDate] = useState(getStringDate(new Date()))
  const [emotion, setEmotion] = useState(3)
  const { onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext)
  const handleClickEmotion = (emotion) => {
    setEmotion(emotion)
  }
  const handleSubmit = () => {
    if(content.length <= 1) {
        contentRef.current.focus()
        return
    }
    if(window.confirm(isEdit? 'Would you like to edit your diary?' : 'Would you like to start a new diary?')){
        if(!isEdit) {
            onCreate(date, content, emotion)
        } else {
            onEdit(data.id, date, content, emotion)
        }
    }
    navigate('/', { replace: true })
  }

  // EDIT
  useEffect(() => {
    if(isEdit) {
        setDate(getStringDate(new Date(data.date)))
        setEmotion(data.emotion)
        setContent(data.content)
    }
  }, [isEdit, data])

  // REMOVE
  const handleRemove = () => {
    if(window.confirm('Are you sure you want to delete?')) {
        onRemove(data.id)
        navigate('/', { replace: true })
    }
  }

  return (
    <div className='DiaryEditor'>
    <Header 
      headText={isEdit ? 'Edit Diary' : 'New Diary'} 
      leftChild={<Button text={'go back'} onClick={() => navigate(-1)}/>} 
      rightChild={<Button text={'Delete'} type={'negative'}onClick={handleRemove}/>}
    /> 
    <div>
      <section>
        <h4>What day is it today?</h4>
        <div className='input_box'>
          <input className='input_date' type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
      </section>
      <section>
        <h4>Feelings of today</h4>
        <div className='input_box emotion_list_wrapper'>
          {emotionList.map((data) => (
            <EmotionItem key={data.id} { ...data } onClick={handleClickEmotion} isSelected={data.id === emotion}/>
          ))}
        </div>
      </section>
      <section>
        <h4>today's diary</h4>
        <div className='input_box text_wrapper'>
            <textarea placeholder='How was your day?' ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
      </section>
      <section>
        <div className='control_box'>
            <Button text={'Cancle'} onClick={() => navigate(-1)}/>
            <Button text={'Completed'} type={'positive'} onClick={handleSubmit}/>
        </div>
      </section>
    </div>
  </div>
  )
}

