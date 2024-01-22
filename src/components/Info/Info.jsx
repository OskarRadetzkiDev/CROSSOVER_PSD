import '.././chr.css'

function Info() {
  return (
    <div className='info'>
        <div className='info-title'>
            Title here
        </div>
        <p className='info-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam numquam exercitationem laboriosam eveniet laborum amet.</p>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='info-circle'><h1>3.5k</h1>
            <p>Pet Care</p>
            </div>
        </div>
        <div className='card'>
            <div className='info-circle'><h1>900</h1>
            <p>Outlet</p>
            </div>
        </div>
        <div className='card'>
            <div className='info-circle'><h1>2k +</h1>
            <p>Pet Helping</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Info