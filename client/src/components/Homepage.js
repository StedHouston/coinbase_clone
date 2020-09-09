import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { apiUrl } from '../config';


function Homepage (props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(apiUrl + '/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);


    return (
        <>
            <Navbar/>
            <h1>User List: </h1>
        </>
        );
}

export default Homepage;
