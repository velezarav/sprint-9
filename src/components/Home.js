import { useState } from 'react'
import '../css/Home.css'
import Board from './Board'
import Poem from './Poem'

export default () => {
  const [userPoem, setUserPoem] = useState("")





  console.log('home')


  return (
    <div className='home'>
      <Poem userPoem={userPoem} setUserPoem={setUserPoem} />
      <Board />
    </div>
  )
}