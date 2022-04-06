import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../../service/PhotosService';


const PhotoDetails = () => {
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getPhoto(id).then(photo => setPhoto(photo));
        setLoading(false);
    }, [])
    console.log(photo)

    return (
        <div>
            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: 150 }}>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (photo &&
                    <>
                        <h1 className='fs-1 mt-2'>{photo.data.title.toUpperCase()}</h1>
                        <div className='mt-4'>
                            <img src={photo.data.url} style={{ width: 300, height: 300 }} alt=""/>
                            <img src={photo.data.thumbnailUrl} className='ms-2' alt="" />
                        </div >
                    </>
                )
            }
        </div >
    );
};

export default PhotoDetails;