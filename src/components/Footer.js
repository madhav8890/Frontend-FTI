import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const Footer = () => {
  return (
    <div className='bg-primary text-white'>
        <div className='text-center p-5 m-5 '>
            <Button variant="light" className='text-center mt-5'> Start Learning</Button>
        </div>
        <div>
            <h6 className='text-center border-top p-4'>Copyright © 2023 Future Techno India</h6>
        </div>
    </div>
  )
}

export default Footer