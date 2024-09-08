import React, { useEffect, useState } from 'react'
import axios from 'axios';
const url = "https://api.github.com/users";

const FetchData = () => {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await axios.get(url);
        // console.log(response);
        setUsers(response.data);
    }
    useEffect(() => {
        getData();
    }, []) // array vuoto permette di ricevere i dati solo al primo render

    return (
        <div className='my-5'>
            <h2>Fetch Data - Github Users</h2>

            <div className='shadow p-3'>
                <ul className=''>
                    {
                        users.map(el => {
                            const { login, id, avatar_url: img, html_url: link } = el;
                            return (
                                <li key={id} className='d-flex flex-row 
                                m-2 px-2 shadow rounded align-items-center'>
                                    <img src={img} style={{ width: '70px' }} className='object-fit-sm-contain  border rounded-circle my-3 ms-3' alt={login} />
                                    <div className='ms-3 '>
                                        <h5>{login}</h5>
                                        <a href={link} target='_blank' className='text-decoration-none'>Profile</a>
                                    </div>

                                </li>
                            )

                        })
                    }
                </ul>
            </div>


        </div>
    )
}

export default FetchData