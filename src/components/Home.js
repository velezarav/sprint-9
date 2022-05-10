import { useState } from 'react'
import '../css/Home.css'
import Board from './Board'
import Poem from './Poem'

export default () => {




  console.log('home')


  return (
    <div className='home'>
      <h1 className='title-row'>MAKE ME</h1>
      <h1 className='title-column'>A<span>&#160;</span> POEM</h1>
      <Poem />
      <Board />
    </div>
  )
}