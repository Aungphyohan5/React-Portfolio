import React from 'react';
import Card from 'react-bootstrap/Card'; //react-bootstrap
import CardGroup from 'react-bootstrap/CardGroup'; //react-bootstrap
import '../../styles/Portfolio.css'; //custom style

export default function Portfolio() {
  return (
    <div className='portfolio-bg'>
      <div className='portfolio-container'>
        <h1 className='text-center text-white'>My Portfolio</h1>
        <CardGroup>
          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://user-images.githubusercontent.com/112873819/220372774-ee55962d-e780-462d-bb9a-1153cf9d06b5.png" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://bootcamp-work-finder.herokuapp.com/">Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/bootcamp-work-finder/">Repository Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://github.com/Aungphyohan5/the-snowbird-exchange/blob/main/assets/images/screenshot.png?raw=true" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://aungphyohan5.github.io/the-snowbird-exchange/">Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/the-snowbird-exchange">Repository Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://github.com/Aungphyohan5/Work-Day-Scheduler/blob/main/Assets/Screenshot.png?raw=true" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://aungphyohan5.github.io/Work-Day-Scheduler" className='link-dark'>Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/Work-Day-Scheduler">Repository Link</Card.Link>
            </Card.Body>
          </Card>

        </CardGroup>

        <CardGroup>
          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://github.com/Aungphyohan5/Code-Quiz/blob/main/Assets/images/screenshot.png?raw=true" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://aungphyohan5.github.io/Code-Quiz/">Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/Code-Quiz">Repository Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://github.com/Aungphyohan5/Weather-Dashboard/blob/main/assets/image/screenshot%20of%20webpage.png?raw=true" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://aungphyohan5.github.io/Weather-Dashboard/">Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/Weather-Dashboard">Repository Link</Card.Link>
            </Card.Body>
          </Card>

          <Card className=' mx-4 cardSpacing rounded'>
            <Card.Img variant="top" src="https://github.com/Aungphyohan5/Note_Taker/blob/main/demo/Note_Taker.png?raw=true" />
            <Card.Body>
              <Card.Title className='mb-4'>Bootcamp Work Finder</Card.Title>
              <Card.Link href="https://sheltered-dawn-92199.herokuapp.com/">Deployed Link</Card.Link><br></br>
              <Card.Link href="https://github.com/Aungphyohan5/Note_Taker">Repository Link</Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>


  );
}





