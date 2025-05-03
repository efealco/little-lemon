import { useNavigate } from 'react-router-dom';
import './Hero.styles.css';
import heroImage from '../../assets/restaurantfood.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/bookings');
  };

  return (
    <section id='hero' className='hero-section'>
      <div className='hero-content'>
        <h1 className='hero-title'>Welcome to Little Lemon</h1>
        <p className='hero-subtitle'>
          Experience bold Mediterranean flavors crafted with tradition and passion.
        </p>
        <div className='hero-buttons'>
          <button className='hero-btn primary' onClick={handleReservationClick}>
            Reserve a Table
          </button>
          <button className='hero-btn secondary'>View Menu</button>
        </div>
      </div>
      <div className='hero-image-wrapper'>
        <img src={heroImage} alt='Delicious food' className='hero-image' />
      </div>
    </section>
  );
};

export default Hero;