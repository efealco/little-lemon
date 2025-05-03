import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BookingForm.styles.css';
import homeIcon from '../../assets/booking/home.svg';
import { submitAPI } from '../../utils/temp';

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;

  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday',
  });

  useEffect(() => {
    localStorage.setItem('Bookings', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData(prev => ({ ...prev, date: selectedDate }));

    dispatch({
      type: 'UPDATE_TIMES',
      date: new Date(selectedDate),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, guests } = formData;

    if (date && time && guests) {
      submitAPI(); // mock submission
      navigate('/confirmed');
      console.log('Submitted:', formData);

      setFormData({
        date: '',
        time: '17:00',
        guests: '',
        occasion: 'Birthday',
      });
    } else {
      console.warn('Form validation failed.');
    }
  };

  return (
    <section className='booking-form'>
      <Link to='/' className='booking-home-link'>
        <img src={homeIcon} alt='Home' className='booking-home' />
      </Link>

      <div className='bookings-container'>
        <h2 className='booking-header'>Little Lemon</h2>
        <h3 className='booking-subheader'>Chicago</h3>
        <h1 className='booking-title'>Book Your Table</h1>

        <form className='form-container' onSubmit={handleSubmit}>
          <label htmlFor='res-date'>Date:</label>
          <input
            id='res-date'
            name='date'
            type='date'
            value={formData.date}
            onChange={handleDateChange}
            required
          />

          <label htmlFor='res-time'>Time:</label>
          <select
            id='res-time'
            name='time'
            value={formData.time}
            onChange={handleChange}
            required
          >
            {times.map(time => (
              <option key={time}>{time}</option>
            ))}
          </select>

          <label htmlFor='guests'>Guests:</label>
          <input
            id='guests'
            name='guests'
            type='number'
            placeholder='1-20'
            min='1'
            max='20'
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <label htmlFor='occasion'>Occasion:</label>
          <select
            id='occasion'
            name='occasion'
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Wedding</option>
          </select>

          <button type='submit' className='booking-button'>
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;