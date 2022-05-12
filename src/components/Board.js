import '../css/Board.css'
import Word from './Word'
import Line from './Line'
import { useEffect, useState } from 'react'
import artworks from '../data/artworks.js'
import Image from './Image'

export default () => {
  const [showWord, setShowWord] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState({})

  const randomNumber = Math.floor(Math.random() * artworks.length);

  const urlImage = `https://api.artic.edu/api/v1/artworks/${artworks[randomNumber]}`

  let newImage = {}
  const fetchImage = async () => {
    try {
      await fetch(urlImage)
        .then(res => res.json())
        .then(data => newImage = {
          ...data.data
          }
        )
        setImage(newImage)
    } catch(err) {
      console.log(err)
      return err
    }
  }

  useEffect(()=> {
    fetchImage()
  }, [])

  console.log(image)


  const handleWord = () => {
    setShowWord(!showWord)
    setShowLine(false)
    setShowImage(false)
  }

  const handleLine = () => {
    setShowWord(false)
    setShowLine(!showLine)
    setShowImage(false)
  }

  const handleImage = () => {
    setShowWord(false)
    setShowLine(false)
    setShowImage(!showImage)
  }
  console.log('board')

  const backgroundImage = {
    backgroundImage: `url(https://www.artic.edu/iiif/2/${image.image_id}/full/843,/0/default.jpg)`,
    backgroundSize: 'cover'
  }

  return (
    <div className='board' style={backgroundImage}>
      <div className='board-filter'>
        <div className='board-bar'>
        <a onClick={handleLine}>poem line</a>
        <a onClick={handleWord}>word</a>
        <a onClick={handleImage}>image</a>
      </div>
      {<div className={(!showImage && !showLine && !showWord) ? 'board-title' : 'board-title-inactive'}>
        <h5>NEED</h5>
        <h5>SOME</h5>
        <h5>INSPIRATION</h5>
        <h5>?</h5>
      </div>}
      { showWord && <Word state={setShowWord}/> }
      { showLine && <Line state={setShowLine}/> }
      { showImage && <Image imageData={image} state={setShowImage} fetchImage={fetchImage}/>}
    </div>
      </div>
      
  )
}