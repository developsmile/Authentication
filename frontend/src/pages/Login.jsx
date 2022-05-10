import React ,{useState}from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate();
    const [loginData , setLoginData] = useState({
        email:"",password :""
    })
    let name,value;
    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setLoginData({...loginData, [name]:value})
    }
    const login = (e)=>{
        e.preventDefault();
        const {email,password} = loginData;
        if(email==="" || password===""){
            window.alert("Please check your field 👎")
        }else{
            fetch('/login',{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json"
                },
                body:JSON.stringify(loginData)
            }).then(res=>res.json()).then(data=>{
                if(data.code===1) navigate('/secrets');
                else if(data.code===11) window.alert("Wrong password")
                else{
                    window.alert('user not found')
                    navigate('/register');
                } 
            })
        }
    }
  return (
    <>
        
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 m-4 shadow rounded">
                        <div className="row m-3 fs-3 text-center">
                           <p> Login</p>
                        </div>
                       <div className="row m-3">
                        <TextField size="small" name='email' onChange={handleChange} id="standard-basic" label="Your email" variant="standard" />
                       </div>
                       <div className="row m-3">
                        <TextField size="small" name='password' onChange={handleChange} id="standard-basic" label="Your password" variant="standard" />
                       </div>
                       <div className="row m-3">
                        <Button onClick={login} size="small" variant="contained" className='rounded-pill shadow'>Login</Button>
                       </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Contact