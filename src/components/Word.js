import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Board.css'

export default ({state}) => {
  const url = "https://random-word-api.herokuapp.com/word"

  const [word, setWord] = useState("")

  const axiosWord = () => axios.get(url)
                        .then(({data}) => {
                          setWord(data) 
                        })

  useEffect(()=> {
    axiosWord()
  }, [])

  const handleWord = () => axiosWord()

  const closeWord = () => {
    state(false)
  }

  return(
    <div className='word-container'>
      <a className='close-button' onClick={closeWord}>close</a>
      <div className='word'><p>&ldquo;{word}&rdquo;</p></div>
      <a onClick={handleWord}>next word &gt;&gt;</a>
    </div>
  )
}