import '../css/Board.css'
import Word from './Word'

export default () => {


  return (
    <div className='board'>
      <div className='board-bar'>
        <a>poem line</a>
        <a>word</a>
        <a>image</a>
      </div>
      <Word />
      <div className='board-title'>
        <h5>NEED</h5>
        <h5>SOME</h5>
        <h5>INSPIRATION</h5>
        <h5>?</h5>
      </div>
    </div>
  )
}