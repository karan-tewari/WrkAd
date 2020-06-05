import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Container, Modal } from 'react-bootstrap';

import './foodindex.css';

const FoodIndex = () => {

    const [show, setShow] = useState(false);


    let selectedImage = "";

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    return (
        <React.Fragment>
            <Container>
                <ul>
                    {Object.entries(food).map(([slug, { name, imgUrl, avaialibility, descprition }]) => (
                       <React.Fragment>
                       <li keys={slug} class="itemList">
                            <div class="cardContainer">
                                <img src={imgUrl} alt={name} onClick={(e) => handleShow(e,slug, imgUrl)} />
                                <h4>{name}</h4>
                                <h5>Available in : {avaialibility}</h5>
                                <h6>{descprition}</h6>
                                <Link to={`/description/${slug}`}>
                                    <Button variant="outline-primary">Buy Now</Button>
                                </Link>
                            </div>
                        </li>

                         <Modal show={show} onHide={handleClose}>
                         <Modal.Body>
                         <img src={imgUrl} alt={name} width={200} height={200} />
                         </Modal.Body>
                         <Modal.Footer>
                             <Button variant="secondary" onClick={handleClose}>
                                 Close
                             </Button>
                         </Modal.Footer>
                     </Modal>
                     </React.Fragment>
                    )
                    )}
                               
                </ul>
                
            </Container>

        </React.Fragment>
        
    )

}


const food = {
    "tacos-with-lime": {
        name: "Taco with Lime",
        avaialibility: "Pan India",
        foodVoucherAvialable: 1,
        descprition: "Tacos with awesome taste and lime, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        imgUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    "pancakes-with-honey": {
        name: "Pancakes with honey",
        avaialibility: "Mumbai, Pune, Bangalore",
        foodVoucherAvialable: 1,
        descprition: "Pancakes served with honey, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        imgUrl: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    "hyderabadi-biryani": {
        name: "Heyderabadi Biryani",
        avaialibility: "Hyederabad",
        foodVoucherAvialable: 0,
        descprition: "Mouth watering biryani, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        imgUrl: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg"
    }
}


export default FoodIndex;

