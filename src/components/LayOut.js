import React from 'react'
import NavBar from './Navbar'
import TagLine from './TagLine'
import Newtraning from './Newtraning'

const LayOut = () => {
  return (
    <div >
        <div className='layout gap{10}'>
        <NavBar/>
        <TagLine/>
        </div>
        <div className='seaction-2'>
        <Newtraning/>
        </div>
    </div>
  )
}

export default LayOut