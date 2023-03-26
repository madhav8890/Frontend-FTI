import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TagLine = () => {
  return (
    <Card bg="transparent" className="text-center mt-5 border-0">
    <Card.Body className='mt-5'>
      <Card.Title className='fw-bold text-white' style={{fontSize:'45px'}}>Welcome to the Future Techno India​</Card.Title>
      <Card.Text className='text-white fw-bold mt-4'>
      We believe in making future tech leaders by providing right education to them. Our mission is to create a Future Ready India.
      </Card.Text>
      <Button className='bg-white text-primary rounded-3' variant=" ">Register With Us</Button>
    </Card.Body>
  </Card>
  )
}

export default TagLine