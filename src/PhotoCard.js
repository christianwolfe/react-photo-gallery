import React, {useState} from 'react';

function PhotoCard(props) {
    const [count, setCount] = useState(0);
    return(
        <div className="card-frame">
            <button onClick={(e) => { setCount(count + 1); }}>like</button>
            <button onClick={(e) => { let decCount = count > 0 ? setCount(count - 1) : count}}>unlike</button>
            <img src={props.url} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p> 👍 {count}</p>
            
        </div>
    )
}
export default PhotoCard;