import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function New() {
    
    const [booking, setBooking] = useState([]);
    const navigate = useNavigate();

    const clickToBackHandler = () => {
        navigate('/');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = new window.FormData(e.target)
        console.log(fields)
        
        
        try {
            fetch(`http://localhost:8000/booking/new`, {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(fields))//formData
            })
                .then(res => {
                    if (!res.ok) throw new Error('Error Create Booking')
                    return res.json()
                })
                .catch(error => console.log('error', error));

        } catch (err) {
            console.log("Something Wrong");
        }
        
    }

    return (
        <div className="container">
            <h1>Create Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Status:</label>
                    <input type="number" className="form-control" id='Status' placeholder="Edit your status" required="required" name="status" defaultValue={booking.status} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" placeholder="Change your description" name="description" defaultValue={booking.description} />
                </div>

                <button type="submit" className="btn btn-primary" >Create</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={clickToBackHandler}>Back To Home</button>
            </div>
        </div>
    );
}
