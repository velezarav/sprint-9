import '../css/Board.css'
import Word from './Word'
import Line from './Line'
import { useState } from 'react'

export default () => {
  const [showWord, setShowWord] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [inspiration, setInspiration] = useState({
    word: false,
    line: false,
    image: false
  })

  const handleWord = () => {
    setShowWord(true)
    setShowLine(false)
    setShowImage(false)
  }

  const handleLine = () => {
    setShowWord(false)
    setShowLine(true)
    setShowImage(false)
  }

  const handleImage = () => {
    setShowWord(false)
    setShowLine(false)
    setShowImage(true)
  }
  console.log('board')

  return (
    <div className='board'>
      <div className='board-bar'>
        <a onClick={handleLine}>poem line</a>
        <a onClick={handleWord}>word</a>
        <a onClick={handleImage}>image</a>
      </div>
      { showWord && <Word state={setShowWord}/> }
      { showLine && <Line state={setShowLine}/> }
      <div className='board-title'>
        <h5>NEED</h5>
        <h5>SOME</h5>
        <h5>INSPIRATION</h5>
        <h5>?</h5>
      </div>
    </div>
  )
}