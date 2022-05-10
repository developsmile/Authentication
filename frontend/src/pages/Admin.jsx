import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Footer from '../Componnents/Footer';
const Admin = () => {
    const [post,setPost] = useState({
        title :"", content:""
    })
    // handle title or content input
    let name,value;
    const handlechange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setPost({...post,[name]:value})
    }
    // publish data event 
    const publish =(e)=>{
        e.preventDefault();
        if(post.title==="" || post.content===""){
            window.alert("Please check your field 😂")
        }else{
            fetch('/admin/post',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(post)
            }).then((res)=>res.json()).then((data)=>{
                console.log(data);
            })
            window.alert("Thanks 🥰")
            setPost({title :"", content:""})
        }
    }
  return (
    <>
        <div className="container">
            <div class="card m-5">
                <div class="card-header">
                    <div className="row m-1 fs-3 text-center">
                        <p>Today</p>
                    </div>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <div className="row m-3">
                            <TextField size="small" name='title' value={post.title}  id="standard-basic" label="title" variant="standard" 
                                onChange={handlechange}
                            />
                        </div>
                        <div className="row m-3">
                            <TextField size="small" name='content' value={post.content} label="Your content here..." multiline rows={3}  variant="standard"
                                onChange={handlechange}
                            />
                        </div>
                        <div className="row m-3 d-flex justify-content-end">
                            <Button onClick={publish} size="small" variant="contained" className='col-2 btn btn-primary shadow '>Publish</Button>
                        </div>
                    </blockquote>
                </div>
            </div>
           <Footer />
        </div>
       
    </>
  )
}

export default Admin