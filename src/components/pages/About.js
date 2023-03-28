import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import Card from 'react-bootstrap/Card'; //react-bootstrap
import CardGroup from 'react-bootstrap/CardGroup'; //react-bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../styles/About.css';





export default function About() {
  return (
    <div>
      <div className='d-flex text-white bgImage'>
        <div className='container-sm customWidth'>
          <h1 className='mb-4'><span style={{ color: '#F2921D ' }}>Hi,</span> I am Aung Phyo Han</h1>
          <h2 style={{ color: '#159895' }}> Full Stack Developer</h2>
          <a href='https://github.com/Aungphyohan5'><FaGithub size={30} color="#F2CD5C" className='m-2' /></a>
          <a href='https://www.linkedin.com/feed/'><FaLinkedin size={30} color="#F2CD5C" className='m-2' /></a>
          <a href='https://stackoverflow.com/'><FaStackOverflow size={30} color="#F2CD5C" className='m-2' /></a>




        </div>
        <div className='container-sm customWidth' style={{ width: '500px', paddingRight: '100px' }}>
          <h2 className='mb-4 font-weight-bold' style={{ color: '#F2921D ' }}>About me</h2>
          <p>
            I have found my passion in web development. Currently, I am attending a web-development Bootcamp from the University of New Brunswick. I love spending time coding and encountering new challenges.
          </p>
        </div>

      </div>
      <div className='cardBg'>
        <div >
          <h2 className='text-center pb-5' style={{ color: '#F2921D ' }}>What I Am Great At</h2>
        </div>
        <Container>
          <CardGroup className='mb-5'>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736189-9bfad932-5027-482c-82c6-a10175082629.svg" />
                <Card.Body>
                  <Card.Title>Node Js</Card.Title>
                  <Card.Text>
                    Node.js is a popular open-source runtime environment built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server-side and build scalable, high-performance applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736221-08f23783-6a50-487d-8375-bac6db538404.png" />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    React is a popular JavaScript library used for building user interfaces. It was developed by Facebook and allows developers to create reusable UI components that can be used to build complex web applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736243-59469e7a-bcf2-45e9-ae31-0858c23216fb.png" />
                <Card.Body>
                  <Card.Title>Express Js</Card.Title>
                  <Card.Text>
                    Express.js is a popular open-source web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, and template engines.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>

          <CardGroup>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736247-3d6c4412-abc3-4228-a11e-bf9cc6a7b91a.png" />
                <Card.Body>
                  <Card.Title>MongoDB</Card.Title>
                  <Card.Text>
                    MongoDB is a popular open-source document-oriented database that stores data in flexible, JSON-like documents. It is designed to be scalable and high-performance, and is often used for web and mobile applications, content management systems, and other data-driven projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736252-427f1f86-76a1-42c3-82c4-2540f4869b69.png" />
                <Card.Body>
                  <Card.Title>JQuery</Card.Title>
                  <Card.Text>
                    JQuery is a popular open-source JavaScript library used for simplifying HTML document traversal and manipulation, as well as event handling, animation, and Ajax interactions. It is designed to make it easier for developers to write JavaScript code that works across multiple browsers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-0'>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/227736255-802f1945-f30a-4291-b606-50ed677c47b1.png" />
                <Card.Body>
                  <Card.Title>MySQL</Card.Title>
                  <Card.Text>
                    MySQL is a popular open-source relational database management system that uses SQL for querying and managing data. It is known for its stability, reliability, and scalability, and is commonly used for web applications, content management systems, and other data-driven projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Container>






      </div >

    </div>






  );
}
