import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/Misc/Box/Box';
import Header from '../../components/Misc/Header/Header';

const Home = () => {
    return (
        <div>
            <Header>
                <div className='d-flex row'>
                    <h1>TRY HOOKS</h1>
                    <div className='d-flex justify-content-around'>
                        <Link to={'/photos'} style={{textDecoration: 'none', color: 'black'}}>
                        <Box
                            img="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            api="Photos" />
                        </Link>
                        <Box
                            img="https://media.istockphoto.com/photos/multi_ethnic-teenagers-taking-a-self-portrait-stock-photo-picture-id1184216653?k=20&m=1184216653&s=612x612&w=0&h=T6xt_a6r-fmG0l3dzX-EHbVPQkJQeY-VX4zb7skIbPQ="
                            api="Users" />
                    </div>
                </div>
            </Header>
        </div>
    );
};

export default Home;