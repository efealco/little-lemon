import './Card.styles.css';
import { specials } from '../../data';
import { RiEBike2Line } from 'react-icons/ri';

const Card = () => {
  return (
    <section className='card-list'>
      {specials.map(({ id, image, name, price, description }) => (
        <article key={id} className='card'>
          <div className='card-image-container'>
            <img src={image} alt={name} className='card-image' />
          </div>

          <div className='card-content'>
            <div className='card-header'>
              <h3>{name}</h3>
              <span className='card-price'>{price}</span>
            </div>

            <p className='card-description'>{description}</p>

            <div className='card-footer'>
              <span>Order a delivery</span>
              <RiEBike2Line size={20} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Card;