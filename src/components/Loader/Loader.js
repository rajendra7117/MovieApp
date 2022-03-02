import React from 'react'
import { TailSpin } from  'react-loader-spinner';
import Modal from '../Modal/Modal';
import './Loader.css'

export default function Loader() {
  return (
    <Modal>
        <div className='loader'>
        <TailSpin color="#00BFFF" height={80} width={80} />
 
  </div>
    </Modal>
  )
}
