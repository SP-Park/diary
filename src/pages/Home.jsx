import React, { useContext, useEffect, useState } from 'react'
// components
import DiaryList from '../components/DiaryList'
import Button from '../components/Button'
import Header from '../components/Header'
import { DiaryStateContext } from '../App'

export default function Home() {
  const [curDate, setCurDate] = useState(new Date())
  // DATA 받아옴 
  const diaryList = useContext(DiaryStateContext)
  const [data, setData] = useState([])
  // 선택된 월별로 데이터 뽑아오기
  useEffect(() => {
    if(diaryList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime()
      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() +1, 0, 23, 59, 59).getTime()
      setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
    }
  }, [diaryList, curDate])

  // 타이틀
  useEffect(() => {
    const title = document.getElementsByTagName('title')[0]
    title.innerHTML = 'Diary'
  }, [])

  // header
  const headText = `${curDate.getMonth() + 1}. ${curDate.getFullYear()}`
  const DecreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
  }
  const IncreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
  }
 
  return (
    <div>
      <Header 
        headText={headText} 
        leftChild={<Button text={'<'} onClick={DecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={IncreaseMonth} />}
      />
      <DiaryList diaryList={data}/>
    </div>
  )
}

