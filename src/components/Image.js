import '../css/Board.css'
import { useState } from 'react'
import { useModal } from '../hooks/useModal'
import Modal from '../components/Modal'

export default ({imageData, state, fetchImage}) => {

  const [image, setImage] = useState()
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const displayImage = `https://www.artic.edu/iiif/2/${imageData.image_id}/full/843,/0/default.jpg`

  const closeImage = () => {
    state(false)
  }

  const handleChangeImage = () => {
    fetchImage()
  }

  return(
    <div className='image-container'>
      <a className='close-button' onClick={closeImage}>close</a>
      <div className='image-info'>
        <p>{imageData.artist_title}</p>
        <p>{imageData.title}, {imageData.date_display}</p>
        <p>Place: {imageData.place_of_origin}</p>
        <p>{imageData.artwork_type_title}</p>
        <p>- Art Institute of Chicago</p>
      </div>
      <a onClick={openModal}>See image &gt;&gt;</a>
      <Modal isOpen={isOpenModal} closeModal={closeModal}><img src={displayImage}/></Modal>
      <a onClick={handleChangeImage}>Another Artwork &gt;&gt;</a>
    </div>
  )
}