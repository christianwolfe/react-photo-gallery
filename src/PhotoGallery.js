import React from 'react';
import './App.css';
import PhotoCard from './PhotoCard';

const data = [
    {
        alt:"this is a placeholder image",
        url:"https://via.placeholder.com/200",
        title:"this is the first title",
        description:"this is the first description"
    },
    {
        alt:"this is a placeholder image",
        url:"https://via.placeholder.com/200",
        title:"this is the second title",
        description:"this is the second description "
    },
    {
        alt:"this is a placeholder image",
        url:"https://via.placeholder.com/200",
        title:"this is the third title",
        description:"this is the third description"
    }
]

function PhotoGallery(props) {
    return(
        <div className="gallery">
            {
                data.map(i => <PhotoCard
                                url={i.url}
                                alt={i.alt}
                                description={i.description} 
                                title={i.title}/>
                                )
            }
        </div>
    )
}
export default PhotoGallery;