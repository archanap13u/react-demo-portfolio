import React from 'react'

function Works() {
  const sty={height:'300px'};
  const color={color:'red'}
  return (
    
   <>
   <h1 className='text-center mt-5 p-5'>Our Works</h1>
   <div className='d-flex justify-content-around flex-wrap' >
   <div className="card   " style={{width:'18rem',border:'1px solid'}}>
    <img src="https://i.pinimg.com/564x/71/ae/a9/71aea98bd66c44865dff295502645a73.jpg" className="card-img-top" style={sty}></img>
    <div className="card-body">
        <h5 className='card-title'style={color} >work1</h5>
    </div>
   </div>
   <div className='card  justify-content-around d-flex flex-wrap' style={{width:'18rem',border:'1px solid'}}>
    <img src="https://i.pinimg.com/564x/e4/9b/4e/e49b4ed30b220c12f510a20a84d68e94.jpg" className="card-img-top" style={sty}></img>
    <div className='card-body'>
        <h5 className='card-title'style={color}  >work2</h5>
    </div>
   </div>
   <div className='card  justify-content-around d-flex flex-wrap' style={{width:'18rem',border:'1px solid'}}>
    <img src="https://i.pinimg.com/236x/81/bd/7d/81bd7d8cf2d418e92c3c12cdb13bc724.jpg" className='card-img-top' style={sty}></img>
    <div className='card-body'>
        <h5 className='card-title' style={color}>work3</h5>
    </div>
   </div>
   <div className='card  justify-content-around d-flex flex-wrap' style={{width:'18rem',border:'1px solid'}}>
    <img src="https://i.pinimg.com/736x/f1/c7/1e/f1c71ed1586390fe809406f5b31038d7.jpg" className="card-img-top" style={sty}></img>
    <div className='card-body'>
        <h5 className='card-title'style={color} >work4</h5>
    </div>
   </div>
   </div>
   </>
  )
}

export default Works