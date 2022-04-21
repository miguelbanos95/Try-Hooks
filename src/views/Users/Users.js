import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../service/UsersService';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [random, setRandom] = useState([])

    useEffect(() => {
        getAllUsers()
            .then(response => {
                setUsers(response.data)
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        axios
            .get('https://picsum.photos/200')
            .then((randomResult) => {
                setRandom(randomResult.data);
            });
    }, []);

    return (
        <div>
            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: 150 }}>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className='row align-items-start mx-2 mt-2 justify-content-center'>
                        {
                            users.map(((user, random) => {
                                return (
                                    <Link key={user.id} to={`/users/${user.id}`} className="col-4" style={{textDecoration: 'none', color: 'black'}}>
                                        <div  className='card mx-2 mt-2'>
                                            <div className="avatar mt-2">
                                                <img src="https://picsum.photos/200" className='rounded' alt="Jhon Doe" />
                                            </div>
                                            <h4 className='text-muted'>{user.username}</h4>
                                        </div>
                                    </Link>
                                )
                            }))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Users;
