import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../../service/PhotosService';


const PhotoDetails = () => {
    const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams(); 

    useEffect(() =>{
        getPhoto(id).then(photo =>
            setPhoto(photo))
            setLoading(false)
    }, [])

    return (
        <div>
            <img src={photo.thumbnailUrl} alt="" />
            <h1>{photo.title}</h1>
        </div>
    );
};

export default PhotoDetails;