import React, { useState } from "react"
import axios from 'axios';
import Layout from '../Layout';
import './header/conHeader.css'



export default function AddConference() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [conductor, setConductor] = useState("");
    const [editorname, setEditorname] = useState("");
    const [venue, setVenue] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    

    function sendData(e) {
        e.preventDefault();
        let data ={
            title:title,
            date:date,
            conductor:conductor,
            venue:venue,
            description:description,
            time:time,
            email:email,
            editorname:editorname
        };

       
  
        const token = localStorage.getItem('token');

        console.log('token is '+token);

       //// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwYTQyMmRiMTI2YjQwMThlODc2ZTciLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE2MjQ4MDE0NDYsImV4cCI6MTYyNTQwNjI0Nn0.s3vyEE-jxlc3ZKZYxkyhdYjiUQktFLpy-1DShF4zw1c';

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log(title);
        console.log(data);
        console.log('user token '+config);
        
        axios.post( 
          'https://iconconferenceapp.herokuapp.com/api/conference/addconference',
          data,
          config
        ).then(
            alert("Successfully Added"),
            console.log).catch(
               // alert("There are some Error"),
                console.log)

    }


    return (
        <Layout>
        &nbsp;&npsp;
        &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp;
        
        <div className="header">
  <div className="headerTitles">
    <span className="headerTitleLg">Add Conferences</span>
  </div>
  <img
    className="headerImg"
    src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    alt=""
  />
</div>
<div className="addConference">
        <div className="container" >
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="title">Conference Title</label>
                    <input type="text" className="form-control" id="title" placeholder="EnterTitle" onChange={(e) => {
                        setTitle(e.target.value)
                    }} />

                </div>
                <div class="mb-3">
                    <label htmlFor="description" class="form-label">Description</label>
                    <textarea class="form-control"
                        id="description"
                        rows="3"
                        name="description"
                        placeholder="Enter Description"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}>
                    </textarea>
                </div>
                


                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="text" className="form-control" id="date" placeholder="Enter date" onChange={(e) => {
                        setDate(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="date">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter date" onChange={(e) => {
                       setEmail(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label for="conductor">Conductor Name</label>
                    <input type="text" className="form-control" id="conductor" placeholder="Enter Conductor name" onChange={(e) => {
                        setConductor(e.target.value);
                    }} />

                </div>
                <div className="form-group">
                    <label for="venue">Venue</label>
                    <input type="text" className="form-control" id="venue" placeholder="Enter Conductor name" onChange={(e) => {
                        setVenue(e.target.value);
                    }} />

                </div>
                <div className="form-group">
                    <label for="time">Time</label>
                    <input type="text" className="form-control" id="time" placeholder="Enter Conductor name" onChange={(e) => {
                        setTime(e.target.value);
                    }} />

                </div>
                <div className="form-group">
                    <label for="editorname">Editor name</label>
                    <input type="text" className="form-control" id="editorname" placeholder="Enter Conductor name" onChange={(e) => {
                        setEditorname(e.target.value);
                    }} />

                </div>
                {/* <div className="form-group">
                    <label for="photo">Conference Photo</label>
                    {
                        photo.length > 0 ?
                        photo.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                    }
                    <input type="file" className="form-control" name="photo" onChange={handleConference} />

                </div> */}

                <button type="submit" className="regbtn">Submit</button>
            </form>
        </div>
        </div>
    </Layout>


    )
}
