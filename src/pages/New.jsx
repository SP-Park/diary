import React, { useEffect } from 'react'
import DiaryEditor from '../components/DiaryEditor'

export default function New() {
  
  // 페이지 이동 시 상단 타이틀 바꾸기
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0]
    titleElement.innerHTML = `Diary - New` 
  },[])
  return (
    <div>
      <DiaryEditor />
    </div>
  )
}

