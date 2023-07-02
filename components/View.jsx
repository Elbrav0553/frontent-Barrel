import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function View() {
    const isFirstInput = useRef(true)
    const { id } = useParams();
    
    const [booking, setBooking] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = 0 
            return
          }
        fetchBooking();
    }, [id]);

    const fetchBooking = () => {
        fetch(`http://localhost:8000/booking/${id}`, {
            method: 'GET'
        })
            .then(res => {
                if (!res.ok) throw new Error('Error fetching Booking')
                return res.json()
            })
            .then(response => {
                console.log(response)
                setBooking(response)

            })
            .catch(error => console.log('error', error));
    }

    const clickToBackHandler = () => {
        navigate('/');
    }

    return <div>
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>

                    <h1>Booking Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Status</th>
                                <th>Description</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{booking.id}</td>
                                <td>{booking.status}</td>
                                <td>{booking.description}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={clickToBackHandler}>Back To Home</button></div>
        </div>
    </div>;
}
