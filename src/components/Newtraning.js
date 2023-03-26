import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsFillBoxFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { FaPuzzlePiece } from 'react-icons/fa'
import CourseSwaiper from './CourseSwaiper';
import AboutUsMain from './AboutUsMain';
import Feature from './Feature';
import Image from 'react-bootstrap/Image'
import Testimonial from './Testimonial';
import ContectForm from './ContectForm';
import Footer from './Footer';


export default function Slider() {
  return (
    <>
    <div className='py-5 px-5 mx-1 '>
      <Row xs={1} md={3} className="g-5 shadow rounded p-2">
        <Col className='mb-5'>
          <Card>
            <Card.Body className='text-center'>
              <Card.Title><GiTeacher className='fs-1' /></Card.Title>
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
          <Card>
            <Card.Body className='text-center'>
              <Card.Title><FaPuzzlePiece className='fs-1' /></Card.Title>
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
          <Card>
            <Card.Body className='text-center'>
              <Card.Title><BsFillBoxFill className='fs-1' /></Card.Title>
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

      <div className='row  mx-1 my-5 shadow rounded p-2'>
        <h1 className='text-center m-5 '>Register for New Free Training</h1>
        <Card style={{ width: '100rem' }} >
          <Card.Body className='d-flex  gap-5'>
            <Card.Img variant="top" src="https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2020/07/what_is_aws.jpg" style={{ width: '30%' }} />
            <div className='d-flex flex-column w-50'>
              <Card.Title className='fw-bold fs-3'>
                Learn AWS System Admin</Card.Title>
              <Card.Text className='lh-lg mt-3 '>
                IT workers wishing to enhance their systems operations knowledge can enroll in AWS Systems Admin Training. This course is ideal for anyone who wants to learn how to conduct day-to-day operations on AWS.
              </Card.Text>
            </div>
            <Button variant="primary" className='' style={{ height: '18%', marginTop: '6.5%', width: '12%' }}>Register for Free</Button>

          </Card.Body>
        </Card>
      </div>
      <div className='py-5 px-1 mx-1 shadow rounded '>
        <h1 className='text-center m-5 '>Our Courses</h1>
        <CourseSwaiper />
      </div>
      <div>
        <AboutUsMain />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <div>
          <h1 className='text-center m-5 '>Be in Demand with Our Professional & Domain Experts</h1>
          <div className='d-flex justify-content-between align-items-center m-5'>
            <div>
              <Image className='img-fluid' src='https://futuretechnoindia.com/wp-content/uploads/2022/02/Untitled_design__2_-removebg-preview-1.png'></Image>
            </div>
            <idv className='w-55 p-3 h-75 '>
              <Accordion className='mx-5 px-5' defaultActiveKey={0}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Focus On Emerging Technologies.</Accordion.Header>
                  <Accordion.Body>
                  FTI mainly focuses on new and emerging technologies those technologies that required in real world.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Learning should begin with the best learning platform</Accordion.Header>
                  <Accordion.Body>
                  Integration and providing better architectural solutions is what we looking for while building this platform.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Learning should be a practical experience.</Accordion.Header>
                  <Accordion.Body>
                  These education will be more practical and more on industrial use cases. this help you in your career and skill devlopment
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </idv>
          </div>
        </div>
      </div>
      <div className='company-logo'>
        <h1 className='text-center mt-5 pt-5 '>Worked and Provided Techical support to following Companies</h1>
        <div className='d-flex justify-content-between align-items-center px-5 py-5'>
          <div><h3>Industry Partners</h3></div>
          <Image className='img-fluid rounded border-start border-3 ' style={{width:'16%'}} src='https://futuretechnoindia.com/wp-content/uploads/2022/02/2-removebg-preview-1.png'/>
          <Image className='img-fluid rounded' style={{width:'16%'}} src='https://futuretechnoindia.com/wp-content/uploads/2022/02/3-removebg-preview-1.png'/>
          <Image className='img-fluid rounded' style={{width:'16%'}} src='https://futuretechnoindia.com/wp-content/uploads/2022/02/4-removebg-preview-1.png'/>
          <Image className='img-fluid rounded' style={{width:'16%'}} src='https://futuretechnoindia.com/wp-content/uploads/2022/02/5-removebg-preview-1.png'/>
          <Image className='img-fluid rounded' style={{width:'16%'}} src='https://futuretechnoindia.com/wp-content/uploads/2022/02/2-removebg-preview-1.png'/>
        </div>
      </div>
      <div className='testimonial'>
        <Testimonial/>
        
      </div>
      <div className='Contact-Form'>
        <ContectForm/>
      </div>
      <div className=''>
      </div>
    </div>
      <Footer/>
    </>
  );
};