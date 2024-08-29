import React from 'react'

function Contact() {
  return (
   <>
   <div className='container-fluid p-5 mt-5'>
    <h1>Contact Us</h1>
    <textarea name='' className='form-control' placeholder='enter your message'></textarea>
    <input type='text ' name="" placeholder='enter your name' id="" className='form-control mt-3'></input>
    <button className='btn btn-info mt-4'>Send</button>
   </div>
   </>
  )
}

export default Contact