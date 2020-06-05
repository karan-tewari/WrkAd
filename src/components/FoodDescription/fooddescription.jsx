import React from 'react';

import {useParams} from 'react-router-dom';

function FoodDescription(){
    const {slug} = useParams();

    const myFood = food[slug];

    const {name, imgUrl} = myFood;

    return (
    <React.Fragment>
        <div className="foodDescContainer">
            <h2>Food Description</h2>
            <h3>{name}</h3>
            <img src={imgUrl} />
        </div>
    </React.Fragment>
)
}


const food = {
    "tacos-with-lime" : {
        name : "Taco with Lime",
        avaialibility : "Pan India",
        foodVoucherAvialable : 1,
        descprition : "Tacos with awesome taste and lime",
        imgUrl : "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    "pancakes-with-honey" : {
        name : "Pancakes with honey",
        avaialibility : "Mumbai, Pune, Bangalore",
        foodVoucherAvialable : 1,
        descprition : "Pancakes served with honey",
        imgUrl : "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
    },
    "hyderabadi-biryani" : {
        name : "Heyderabadi Biryani",
        avaialibility : "Hyederabad",
        foodVoucherAvialable : 0,
        descprition : "Mouth watering biryani",
        imgUrl : "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg"
    }
}


export default FoodDescription;