import React, {useState} from 'react';

function PhotoCard(props) {
    const [count, setCount] = useState(0);
    return(
        <div className="card-frame">
            <button onClick={(e) => { setCount(count + 1); }}>like</button>
            <button onClick={(e) => { setCount(count - 1); }}>unlike</button>
            <img src={props.url} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>likes: {count}</p>
            
        </div>
    )
}
export default PhotoCard;