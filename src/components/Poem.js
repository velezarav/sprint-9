import '../css/Home.css'

export default () => {


  return (
    <div className='poem-conainer'>
      <div className="bar-links">
        <a>poem wall</a>
        <p>  /  </p>
        <a>personal area</a>
      </div>
      <div className='poem'>
        <h2>Write here...</h2>
        <div className='text'>
          <textarea autoFocus>
          </textarea>
        </div>
      </div>
      <button>POST</button>
    </div>
  )
}