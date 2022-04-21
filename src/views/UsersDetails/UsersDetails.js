import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/UsersService';

const UsersDetails = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getUser(id).then(user => setUser(user));
        setLoading(false);
    }, [])
    console.log(user)

    return (
        <div>
            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: 150 }}>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (user &&
                    <div className="container mt-4">
                        <div className="main-body">
                            <div className="row gutters-sm">
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                                <div className="mt-3">
                                                    <h4>{user.data.username}</h4>
                                                    <h5 className="text-muted font-size-sm"> {user.data.company.bs}</h5>
                                                    <p className="text-muted font-size-sm">
                                                    {user.data.address.street}, {user.data.address.city}.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Full Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <h6 className="mb-0">{user.data.name}</h6>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.data.email}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Phone</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.data.phone}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Company</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.data.company.name}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.data.address.street}, {user.data.address.suite}, {user.data.address.city}. {user.data.address.zipcode}. 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UsersDetails;
