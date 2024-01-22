import '.././chr.css'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'


function Cards() {
  return (
    <div className='cards-bg'>
        <div className='cards-title'>
            Title here
            <p className='cards-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <img src={card1} alt='placeholder' />
            <h1>Pet Care</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card'>
            <img src={card2} alt='placeholder' />
            <h1>Pet Care</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card'>
            <img src={card3} alt='placeholder' />
            <h1>Pet Care</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        </div>








    </div>
  )
}

export default Cards