import React, {  useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Home = () => {


        const [csrf, setCsrf] = useState([]);

             useEffect(() =>{
                const url = `https://examplebd.com/api/get-csrf-token`;
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCsrf(data)
                    console.log(data);
                })
             }, [])
                
  
    return (
        <div>
            <Container>
                <Row>
                <Col md={4} className="mt-5">
                    <Card>
                        <Card.Body>
                            <h3>{csrf.csrf_token}</h3>
                        </Card.Body>
                    </Card>
               </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
