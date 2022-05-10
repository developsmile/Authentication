import React, { useState} from 'react'
import { useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const About = () => {
    // handle input field
    const [regData , setRegData] = useState({
        name : "",email:"",password :""
    })
    const navigate = useNavigate();
    let name,value;
    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setRegData({...regData, [name]:value})
    }
    // register page 
    const register = (e)=>{
        e.preventDefault();
        const {name,email,password} = regData;
        if(name==="" || email==="" || password===""){
            window.alert("Please check your field 👎")
        }else{
            fetch('/register',{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json"
                },
                body:JSON.stringify(regData)
            }).then(res=>res.json()).then(data=>{
                window.alert(data.message)
                navigate('/secrets');
            })
        }
    }
  return (
    <>
        <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 m-4 shadow rounded">
                        <div className="row m-3 fs-3 text-center">
                           <p> Register </p>
                        </div>
                        <div className="row m-3">
                        <TextField size="small" name = 'name' onChange={handleChange} id="standard-basic" label="Your Name" variant="standard" />
                       </div>
                       <div className="row m-3">
                        <TextField size="small" name='email' onChange={handleChange} id="standard-basic" label="Your email" variant="standard" />
                       </div>
                       <div className="row m-3">
                        <TextField size="small" name='password' onChange={handleChange} id="standard-basic" label="Your password" variant="standard" />
                       </div>
                       <div className="row m-3">
                        <Button onClick={register} size="small" variant="contained" className='rounded-pill shadow'>Register</Button>
                       </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About