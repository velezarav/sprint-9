import '../css/Home.css'
import { poemsPrestados } from "../data/poemsArray"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default ({userPoem, setUserPoem}) => {
  
  const [ everyPoem, setEveryPoem ]= useState(poemsPrestados)

  const handlePoem = e => {
    setUserPoem(e.target.value)
    console.log(userPoem)
  }

  useEffect(()=>{
    const data = localStorage.getItem('everyPoem');
    if(data) {
      setEveryPoem(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('everyPoem', JSON.stringify(everyPoem))
  }, [])

  const submitPoem = () => {

  }

  return (
    <div className='poem-conainer'>
      <div className="bar-links">
        <Link to={"/poem-wall"}>poem wall</Link>
        <p>  /  </p>
        <Link to={"/login"}>personal area</Link>
      </div>
      <div className='poem'>
        <h2>Write here...</h2>
        <div className='text'>
          <textarea
          value={userPoem}
          onChange={handlePoem}
          autoFocus>
          </textarea>
        </div>
      </div>
      <button className='poem-button' onClick={submitPoem}>POST</button>
    </div>
  )
}