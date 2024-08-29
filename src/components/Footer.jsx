import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-primary p-4'>
       <div className='row'>
         
        <div className="col">
            <h3>Portfolio</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem corrupti non. Eum in temporibus itaque sunt aperiam velit id modi quam nisi, voluptates facilis suscipit molestias sed porro illoipsum dolor sit amet consectetur adipisicing elit. Quos quidem corrupti non. Eum in temporibus itaque sunt aperiam velit id modi quam nisi, voluptates facilis suscipit molestias sed porro illo.

            </p>
        </div>
        <div className="col">
        <h3>Importent Links</h3>
        <a href="">link1</a>
        <a href="">link1</a>
        <a href="">link1</a></div>
        <div className="col">
          <h3>Feedbacks</h3>
          <textarea name="" id="" className='form-control mb-3'></textarea>
          <button className='btn btn-success'>Submit</button>
        </div>
        </div>
        <h4 className='text-center'>Portfolio 2024 &copy; all rights reserved</h4>
        </div>
        </>
  )
}

export default Footer