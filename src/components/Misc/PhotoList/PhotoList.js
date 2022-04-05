import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPhotos } from '../../../service/PhotosService';

const PhotoList = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPhotos()
            .then(response => {
                setPhotos(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {loading ? (
                <div className='d-flex justify-content-center align-items-center' style={{ height: 150 }}>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row align-items-start mx-2 mt-2">
                    {
                        photos.map((photo) => {
                            return (
                                <Link key={photo.id} to={`/photos/${photo.id}`} className='col-3'>
                                    <div className='card mt-2 mb-2'>
                                        <img src={photo.url} className="card-img-top" alt="..." />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};
export default PhotoList;