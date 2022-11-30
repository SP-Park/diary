import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import DiaryItem from './DiaryItem'
import ControlMenu from './ControlMenu'
import { sortOptionList, filterOptionList } from '../utils/option'

export default function DiaryList({ diaryList }) {
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('latest') // filter 1
  const [filter, setFilter] = useState('all')  // filter 2

  const getProcess = () => {
    const copyList = JSON.parse(JSON.stringify(diaryList)) 
    const filterCheck = (it) => {
      if(filter === 'good') {
        return parseInt(it.emotion) <= 3
      } else {
        return parseInt(it.emotion) > 3
      }
    }
    const compare = (a, b) => {
      if(sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date)
      } else {
        return parseInt(a.date) - parseInt(b.date)
      }
    }
    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCheck(it))
    const sortedList = filteredList.sort(compare)
    return sortedList
  }

  return (
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
        </div>
        <div className='right_col'>
          <Button text={'New Diary'} type={'positive'} onClick={() => navigate('/new')}/>
        </div>
      </div>
      {getProcess().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}