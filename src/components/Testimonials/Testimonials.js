import './Testimonials.styles.css';
import { testimonials } from '../../data';
import star from '../../assets/testimonials/star.svg';

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <div className='testimonials-header'>
        <h2 className='testimonials-heading'>What Our Customers Say</h2>
        <p className='testimonials-subtitle'>
          Real stories from real diners who love our food.
        </p>
      </div>

      <div className='testimonials-grid'>
        {testimonials.map(({ id, image, name }) => (
          <div key={id} className='testimonial-card'>
            <img src={image} alt={name} className='testimonial-avatar' />
            <div className='testimonial-stars'>
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={star} alt='star' className='testimonial-star' />
              ))}
            </div>
            <h4 className='testimonial-name'>{name}</h4>
            <p className='testimonial-text'>
              “Absolutely amazing! The flavors were authentic and service was top-notch.”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;