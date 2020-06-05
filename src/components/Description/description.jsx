import React from 'react';
import {Outlet} from 'react-router-dom';
import './descption.css'
import {Container, Row} from 'react-bootstrap';

const Description = () => {
    return(
        <React.Fragment>
            <Container>
            <h1 class="centerHead">Demo heading</h1>
            <Outlet />
            </Container>
        </React.Fragment>
    )
}



export default Description;
