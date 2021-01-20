import React from 'react';

function PhotoCard(props) {
    console.log(props);
    return(
        <div className="card-frame">
            <img src={props.url} alt={props.alt}/>
            <p>{props.title}</p>
            <p>{props.description}</p>
            
        </div>
    )
}
export default PhotoCard;