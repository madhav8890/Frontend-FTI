import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BsFillBoxFill} from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {FaPuzzlePiece} from 'react-icons/fa'

const Feature = () => {
  return (
    <div className='py-5 px-5 mx-1'>
    <h1 className='text-center m-5 '>About Us</h1>

    <Row xs={1} md={2} className="g-5">
        <Col>
          <Card className='border-0'>
            <Card.Body className='text-center shadow rounded'>
              <Card.Title><GiTeacher className='fs-1'/></Card.Title>
              <Card.Title className='mt-3 fs-4'>Premium Material</Card.Title>
              <Card.Text className='lh-lg'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='border-0'>
            <Card.Body className='text-center shadow rounded'>
              <Card.Title><FaPuzzlePiece className='fs-1'/></Card.Title>
              <Card.Title className='mt-3 fs-4'>Premium Material</Card.Title>
              <Card.Text className='lh-lg'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='border-0'>
            <Card.Body className='text-center shadow rounded'>
              <Card.Title><BsFillBoxFill className='fs-1'/></Card.Title>
              <Card.Title className='mt-3 fs-4'>Premium Material</Card.Title>
              <Card.Text className='lh-lg'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className='border-0'>
            <Card.Body className='text-center shadow rounded'>
              <Card.Title><BsFillBoxFill className='fs-1'/></Card.Title>
              <Card.Title className='mt-3 fs-4'>Premium Material</Card.Title>
              <Card.Text className='lh-lg'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  )
}

export default Feature