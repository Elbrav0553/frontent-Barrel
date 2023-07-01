import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export function Edit() {
    const isFirstInput = useRef(true)
    const { id } = useParams();
    // console.log(id);
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
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const data = response.data//JSON.parse(response.data)
                //console.log(data)
                setBooking(data)

            })
            .catch(error => console.log('error', error));
    }

    const clickToBackHandler = () => {
        navigate('/');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = new window.FormData(e.target)
        console.log(fields)
        //console.log(fields.get('status'))
        //let formData = new FormData();
        //formData.append('status', 5);
        //formData.append('description', 'John123');
    
        //TODO VALIDATE DATA

        //console.log(formData)
        try {
            fetch(`http://localhost:8000/booking/${id}/edit`, {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(fields))//formData
            })
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.log('error', error));

        } catch (err) {
            console.log("Something Wrong");
        }
        
    }

    return (
        <div className="container">
            <h1>Edit Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter Your Full Name" name="id" defaultValue={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> Status:</label>
                    <input type="number" className="form-control" id='Status' placeholder="Edit your status" name="status" defaultValue={booking.status} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" placeholder="Change your description" name="description" defaultValue={booking.description} />
                </div>

                <button type="submit" className="btn btn-primary" >Update</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={clickToBackHandler}>Back To Home</button>
            </div>
        </div>
    );
}
