import React, { useState } from "react";
import axios from 'axios'

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const submitData = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            try {
                const { data } = await axios.post('http//localhost:8000/register')

                console.log(data)
                setUserData({ name: "", email: "", password: "" })
            }catch(error){
                console.log(error)
            }
         
        }else{
            alert("all data is mandotory to fill")
        }

    }

    return (
        <div>
            <h1>register</h1>
            <form onSubmit={submitData}>
                <label> name: </label> <br />
                <input type="text" onChange={handleChange} name="name" value={userData.name} /><br />
                <label>email:</label><br />
                <input type="email" onChange={handleChange} name="email" value={userData.email} /><br />
                <label>password:</label><br />
                <input type="password" onChange={handleChange} name="password" value={userData.password} /><br />
                <input type="submit" value="register here" />
            </form>
        </div>
    )
}

export default Register