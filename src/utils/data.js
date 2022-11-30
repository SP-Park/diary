const env = process.env
env.PUBLIC_URL = env.PUBLIC_URL || ""

export const emotionList = [
    {
        id: 1,
        img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
        descript: 'Very good'
    },
    {
        id: 2,
        img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
        descript: 'Good'
    },
    {
        id: 3,
        img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
        descript: 'So So'
    },
    {
        id: 4,
        img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
        descript: 'Bad'
    },
    {
        id: 5,
        img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        descript: 'Very bad'
    },
]

export const dummyData = [
    {
      id: 1,
      emotion: 1,
      content: '오늘의 일기 1번',
      date: 1669714528156
    },
    {
      id: 2,
      emotion: 2,
      content: '오늘의 일기 2번',
      date: 1669714528157
    },
    {
      id: 3,
      emotion: 3,
      content: '오늘의 일기 3번',
      date: 1669714528158
    },
    {
      id: 4,
      emotion: 4,
      content: '오늘의 일기 4번',
      date: 1669714528159
    },
    {
      id: 5,
      emotion: 5,
      content: '오늘의 일기 5번',
      date: 1669714528160
    },
  ]


  // Date의 밀리세컨즈 구하기
  // console.log(new Date().getTime())