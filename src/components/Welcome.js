import { Link } from "react-router-dom"
import '../css/Home.css'


export default () => {

  return(
    <div className="welcome">
      <p><span>MAKE ME A POEM</span> is a site </p>
      <p>for the internet generation poets,</p>
      <p>where you can find some <em>sources of inspiration</em></p>
      <p>if you are blocked but driven to write.</p><br />
      <p>while on the left you can write your poem,</p>
      <p>on the right panel you will find resources,</p>
      <p>such as <b>words, lines of poems or images</b> </p>
      <p>from the <b>Art Institute of Chicago</b> so you can inspire</p>
      <p>and trigger your creativity</p><br />
      <p>if you create an account</p>
      <p>you can also post your poems on the <b>poem wall</b></p>
      <p>and read other users poems as well.</p>
      <Link to={"/home"} >START TO WRITE</Link>
    </div>
  )
}