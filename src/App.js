import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import New from './pages/New'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Diary from './pages/Diary'
import { createContext, useEffect, useReducer, useRef } from "react";

import { reducer } from './utils/reducer'

// Context
export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  
  // DATA 가져오기 및 셋팅
  const [data, dispatch] = useReducer(reducer, [])
  useEffect(() => {
    const localData = localStorage.getItem('diary')
    if(localData) {
      const diaryList = JSON.parse(localData).sort((a,b) => parseInt(b.id) - parseInt(a.id))
      if(diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1
        dispatch({ type: 'INIT', data: diaryList})
      }
    }
  }, [])


  // dispatch
  const dataId = useRef(0)
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({ type: 'CREATE', data: {
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
    dataId.current += 1
  }
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({ type: 'EDIT', data: {
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
  }
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE' , targetId })
  }

  return (
    <div className="App">
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
