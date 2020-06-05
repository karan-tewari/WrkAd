import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

import './home.css';

import {Button} from 'react-bootstrap';

const Home = () => {
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <h1 className="centerHead">Welcome to the food portal</h1>
                    <h2 className="centerHead">Click on button below to view our list items</h2>
                    <div class="boxContainer">
                        <Link to={`/description`}><Button variant="outline-primary">View Products</Button></Link> 
                    </div>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home;