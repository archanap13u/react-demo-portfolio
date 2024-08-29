import React from 'react'

function About() {
  return (
   <>
   <div className='p-5 mt-5 row container-fluid'>
    <div className='col-8'>
    <h1>About Us</h1>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, dolorem suscipit officia iure recusandae eos, expedita possimus similique, 
        sunt perspiciatis delectus harum nobis perferendis sequi aspernatur odit magnam iste quo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempore, ratione aliquam, enim voluptatum hic, aliquid ipsam ab voluptatem consectetur repudiandae reiciendis odio esse eius sapiente repellat! Nobis, reiciendis magni.

    </p>
    </div>
    <div className='col-4'>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=reBS3MHiZrQaJi-l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
   </div>
   </>
  )
}

export default About