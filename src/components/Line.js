import { useModal } from '../hooks/useModal'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'
import '../css/Board.css'

export default ({ state }) => {
  // modal para poema entero
  const [poem, setPoem] = useState({})
  const [line, setLine] = useState("")

  const [isOpenModal, openModal, closeModal] = useModal(false);

  
  let newPoem = {}
  const fetchPoem = async () => {
    try {
      let response = await fetch("https://poetrydb.org/random")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          newPoem = {...data[0]}})
      setPoem(newPoem)
    } catch (err) {
      console.log(err)
      return err
    }
    const lineCount = parseInt(newPoem.linecount)
    const randomNumber = Math.floor(Math.random() * lineCount) + 1;
    const newLines = [...newPoem.lines]
    const linesFiltered = newLines.filter(line => line.length > 0)
    const randomLine = linesFiltered[randomNumber]
    setLine(randomLine)
  }
  useEffect(() => {
    fetchPoem()
  }, [])

  console.log(poem)

  const handleChangePoem = () => {
    fetchPoem()
  }


  const closeWord = () => {
    state(false)
  }

  return (
    <div className='line-container'>
      <a className='close-button' onClick={closeWord}>close</a>
      <div className='line'>
        <p>&ldquo;{line}&rdquo;</p>
        <p>Fragment from: {poem.title}</p>
        <p>- {poem.author}</p>
      </div>
      <a onClick={openModal}>Read the poem &gt;&gt;</a>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>{poem.lines?.map(line => <p key={line[line]}>{line}</p>)}</Modal>
      <a onClick={handleChangePoem}>Another poem&gt;&gt;</a>
    </div>
  )
}