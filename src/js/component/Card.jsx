import React from "react";

const cardStyle = {
    "width": "18rem"
}

const Card = () => {
    return (
        <div class="card my-5 mx-auto" style={cardStyle}>
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;