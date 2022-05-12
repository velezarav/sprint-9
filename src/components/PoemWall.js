import { poemsPrestados } from "../data/poemsArray"
import "../css/PoemWall.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default () => {



  const printPoems = poemsPrestados.map(poem => <div className="single-poem">
    <div className="poem-lines">{poem.lines.map(line => <p>{line}</p>)}</div>
    <p className="poem-user">	&#8212;{poem.user}</p>
  </div>)

  return (
    <>
      <div className="bar-links">
          <Link to={"/home"}>write a poem</Link>
          <p>  /  </p>
          <Link to={"/login"}>personal area</Link>
        </div>
    <div className="poem-wall">
      {printPoems}
    </div>
    </>
  )

}