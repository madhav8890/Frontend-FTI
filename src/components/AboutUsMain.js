import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ReactPlayer from 'react-player/youtube'


const AboutUsMain = () => {
  return (
    <div className='shadow rounded p-2'>
    <h1 className='text-center m-5 '>About Us</h1>

    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li" className='border-0'>We believe that anyone can succeed, no matter what their college or field of study. FTI is an initiative built on this thought.</ListGroup.Item>
      <ListGroup.Item as="li" className='border-0'>The organization is founded by Bobby Singh. We provide hands-on training, mentorship, guidance and have an inclusive organization</ListGroup.Item>
      <ListGroup.Item as="li" className='border-0'>Expert career guidance on Open Source, Internships, and Jobs around the world.</ListGroup.Item>
    </ListGroup>
    <ReactPlayer
    //  url='https://www.youtube.com/watch?v=6a7IG054FOA' 
        className='react-player mt-5'
          playing
          width='100%'
          height='780px'
          controls={true}
/>
    </div>
  )
}

export default AboutUsMain