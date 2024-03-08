
import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {
  const {id} = useParams()
  const [title, setName]=useState()
  const[description,setDescription]=useState()
  const[status,setStatus]=useState()
  const navigate=useNavigate()

  useEffect(()=>{{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.title)
      setDescription(result.data.description)
      setStatus(result.data.status)
    })
    .catch(err => console.log(err))
  }},[])

const Update= (e) =>{
  e.preventDefault();
  axios.put("http://localhost:3001/updateUser/"+id,{title, description, status})
  .then(result => {
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))
}


  return (
    <>
    <h1 className="text-danger text-center">TASKS TO DO</h1>
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2 className="text-danger text-center">Update Task</h2>
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Name </label>
          <input type="text" className='form-control' placeholder='Enter Title' required
          value={title} onChange={(e)=> setName(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Description </label>
          <input type="description" className='form-control' placeholder='Enter Description' required
          value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Status </label>
          <input type="text"  className='form-control' placeholder='Enter Status' required
          value={status} onChange={(e)=> setStatus(e.target.value)}/>
          </div>
          
          <div className='text-center'>
          <button className='btn btn-success' >Update</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateTask
