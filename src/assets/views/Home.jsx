import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export const Home = ( {title, subTitle} ) => {
  return (
    <>
        <Container className='d-flex flex-column align-center text-center mt-5'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <h1>🎂</h1>
        </Container>
    </>
  )
}
export default Home;