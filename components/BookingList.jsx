import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';


export function BookingList() {
    const [bookingData, setBookingData] = useState([]);
    const isFirstInput = useRef(true)
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = 0
            return
        }
        fetchData();
    }, [])

    const fetchData = () => {
        fetch("http://localhost:8000/booking", {
            method: 'GET'
        })
            .then(res => {
                if (!res.ok) throw new Error('Error fetching Booking')
                return res.json()
            })
            .then(response => {
                //console.log(response)
                //JSON.parse(response.data)
                //console.log(data)
                setBookingData(response)

            })
            .catch(error => console.log('error', error));
    }

    const handleDelete = (id) => {
        fetch("http://localhost:8000/booking/" + id + "/delete", {
            method: 'POST',

        })
            .then(res => {
                if (!res.ok) throw new Error('Error Delete Booking')
                return res.json()
            })
            .then(response => {
                //console.log(response.data)
                const data = response.data//JSON.parse(response.data)
                console.log(data)

                const newUserData = bookingData.filter((item) => {
                    return (
                        item.id !== id
                    )
                })
                setBookingData(newUserData)
                

            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <div >
                <h1>Booking List</h1>
                <p><NavLink to={`/new`} className="btn btn-primary mx-2">Create New Booking</NavLink></p>
            </div>

            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>CreatedAt</th>
                        <th>deletedAt</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        bookingData.map((booking) => {
                            return (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.status} </td>
                                    <td>{booking.createdAt} </td>
                                    <td>{booking.deletedAt} </td>
                                    <td>
                                        <NavLink to={`/view/${booking.id}`} className="btn btn-success mx-2">View</NavLink>
                                        <NavLink to={`/edit/${booking.id}`} className="btn btn-info mx-2">Edit</NavLink>
                                        <button onClick={() => handleDelete(booking.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

