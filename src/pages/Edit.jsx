import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App'
import DiaryEditor from '../components/DiaryEditor'

export default function Edit() {
  const { id } = useParams()

  // 페이지 이동 시 상단 타이틀 바꾸기
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0]
    titleElement.innerHTML = `Diary - ${id} Edit` 
  },[])

  const navigate = useNavigate()
  const diaryList = useContext(DiaryStateContext)
  const [data, setData] = useState()

  useEffect(() => {
    const target = diaryList.find((it) => parseInt(it.id) === parseInt(id))
    if(target) {
      setData(target)
    } else {
      alert('There is no diary.!')
      navigate('/', { replace: true })
    }
  }, [diaryList, id])

  return (
    <div>
      {data && <DiaryEditor isEdit={true} data={data} />}
    </div>
  )
}

