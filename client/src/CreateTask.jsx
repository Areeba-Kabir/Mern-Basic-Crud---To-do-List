import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [title, setName]=useState()
  const[description,setDescription]=useState()
  const[status,setStatus]=useState()
  const navigate=useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{title,description,status})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <h1 className="text-danger text-center">TASKS TO DO</h1>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Task</h2>
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Title </label>
          <input type="text" className='form-control' placeholder='Enter Title' required
          onChange={(e)=> setName(e.target.value)}/>
          
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Description </label>
          <input type="text" className='form-control' placeholder='Enter Description' required
          onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
          <label htmlFor="" class="fw-bolder">Status </label>
          <input type="text"  className='form-control' placeholder='Enter Status'  required
          onChange={(e)=> setStatus(e.target.value)}/>
          </div>
          
          <div className='text-center'>
          <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateUser
